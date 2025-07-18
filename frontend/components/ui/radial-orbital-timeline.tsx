"use client"
import { useState, useEffect, useRef } from "react"
import type React from "react"

import { ArrowRight, Link, Zap } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface TimelineItem {
  id: number
  title: string
  date: string
  content: string
  category: string
  icon: React.ElementType
  relatedIds: number[]
  status: "completed" | "in-progress" | "pending"
  energy: number
}

interface RadialOrbitalTimelineProps {
  timelineData: TimelineItem[]
}

export default function RadialOrbitalTimeline({ timelineData }: RadialOrbitalTimelineProps) {
  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>({})
  const [viewMode, setViewMode] = useState<"orbital">("orbital")
  const [rotationAngle, setRotationAngle] = useState<number>(0)
  const [autoRotate, setAutoRotate] = useState<boolean>(true)
  const [pulseEffect, setPulseEffect] = useState<Record<number, boolean>>({})
  const [centerOffset, setCenterOffset] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  })
  const [activeNodeId, setActiveNodeId] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const orbitRef = useRef<HTMLDivElement>(null)
  const nodeRefs = useRef<Record<number, HTMLDivElement | null>>({})

  const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === containerRef.current || e.target === orbitRef.current) {
      setExpandedItems({})
      setActiveNodeId(null)
      setPulseEffect({})
      setAutoRotate(true)
    }
  }

  const toggleItem = (id: number) => {
    setExpandedItems((prev) => {
      const newState = { ...prev }
      Object.keys(newState).forEach((key) => {
        if (Number.parseInt(key) !== id) {
          newState[Number.parseInt(key)] = false
        }
      })

      newState[id] = !prev[id]

      if (!prev[id]) {
        setActiveNodeId(id)
        setAutoRotate(false)

        const relatedItems = getRelatedItems(id)
        const newPulseEffect: Record<number, boolean> = {}
        relatedItems.forEach((relId) => {
          newPulseEffect[relId] = true
        })
        setPulseEffect(newPulseEffect)

        centerViewOnNode(id)
      } else {
        setActiveNodeId(null)
        setAutoRotate(true)
        setPulseEffect({})
      }

      return newState
    })
  }

  useEffect(() => {
    let rotationTimer: NodeJS.Timeout

    if (autoRotate && viewMode === "orbital") {
      rotationTimer = setInterval(() => {
        setRotationAngle((prev) => {
          const newAngle = (prev + 0.3) % 360
          return Number(newAngle.toFixed(3))
        })
      }, 50)
    }

    return () => {
      if (rotationTimer) {
        clearInterval(rotationTimer)
      }
    }
  }, [autoRotate, viewMode])

  const centerViewOnNode = (nodeId: number) => {
    if (viewMode !== "orbital" || !nodeRefs.current[nodeId]) return

    const nodeIndex = timelineData.findIndex((item) => item.id === nodeId)
    const totalNodes = timelineData.length
    const targetAngle = (nodeIndex / totalNodes) * 360

    setRotationAngle(270 - targetAngle)
  }

  const calculateNodePosition = (index: number, total: number) => {
    const angle = ((index / total) * 360 + rotationAngle) % 360
    const radius = 200
    const radian = (angle * Math.PI) / 180

    const x = radius * Math.cos(radian) + centerOffset.x
    const y = radius * Math.sin(radian) + centerOffset.y

    const zIndex = Math.round(100 + 50 * Math.cos(radian))
    const opacity = Math.max(0.4, Math.min(1, 0.4 + 0.6 * ((1 + Math.sin(radian)) / 2)))

    return { x, y, angle, zIndex, opacity }
  }

  const getRelatedItems = (itemId: number): number[] => {
    const currentItem = timelineData.find((item) => item.id === itemId)
    return currentItem ? currentItem.relatedIds : []
  }

  const isRelatedToActive = (itemId: number): boolean => {
    if (!activeNodeId) return false
    const relatedItems = getRelatedItems(activeNodeId)
    return relatedItems.includes(itemId)
  }

  const getStatusStyles = (status: TimelineItem["status"]): string => {
    switch (status) {
      case "completed":
        return "text-white bg-primary border-primary shadow-lg shadow-primary/30"
      case "in-progress":
        return "text-white bg-emerald-500 border-emerald-500 shadow-lg shadow-emerald-500/30"
      case "pending":
        return "text-white bg-gray-500 border-gray-500 shadow-lg shadow-gray-500/30"
      default:
        return "text-white bg-gray-500 border-gray-500"
    }
  }

  return (
    <div
      className="w-full h-screen flex flex-col items-center justify-center bg-gradient-to-br from-amber-50 via-stone-100 to-amber-100 overflow-hidden relative"
      ref={containerRef}
      onClick={handleContainerClick}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-pulse" />
        <div
          className="absolute bottom-20 right-20 w-48 h-48 bg-emerald-400/10 rounded-full blur-xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-10 w-24 h-24 bg-teal-400/10 rounded-full blur-xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="relative w-full max-w-4xl h-full flex items-center justify-center">
        <div
          className="absolute w-full h-full flex items-center justify-center"
          ref={orbitRef}
          style={{
            perspective: "1000px",
            transform: `translate(${centerOffset.x}px, ${centerOffset.y}px)`,
          }}
        >
          {/* Central Hub - Morphify Logo */}
          <div className="absolute w-20 h-20 rounded-full bg-gradient-to-br from-primary via-emerald-500 to-teal-500 animate-pulse-glow flex items-center justify-center z-10 glass-strong">
            <div className="absolute w-24 h-24 rounded-full border border-primary/30 animate-ping opacity-70"></div>
            <div
              className="absolute w-28 h-28 rounded-full border border-emerald-400/20 animate-ping opacity-50"
              style={{ animationDelay: "0.5s" }}
            ></div>
            <div className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center">
              <span className="text-primary font-anton text-xl font-bold">M</span>
            </div>
          </div>

          {/* Orbital Rings */}
          <div className="absolute w-96 h-96 rounded-full border border-primary/20"></div>
          <div className="absolute w-[500px] h-[500px] rounded-full border border-emerald-400/10"></div>

          {timelineData.map((item, index) => {
            const position = calculateNodePosition(index, timelineData.length)
            const isExpanded = expandedItems[item.id]
            const isRelated = isRelatedToActive(item.id)
            const isPulsing = pulseEffect[item.id]
            const Icon = item.icon

            const nodeStyle = {
              transform: `translate(${position.x}px, ${position.y}px)`,
              zIndex: isExpanded ? 200 : position.zIndex,
              opacity: isExpanded ? 1 : position.opacity,
            }

            return (
              <div
                key={item.id}
                ref={(el) => (nodeRefs.current[item.id] = el)}
                className="absolute transition-all duration-700 cursor-pointer"
                style={nodeStyle}
                onClick={(e) => {
                  e.stopPropagation()
                  toggleItem(item.id)
                }}
              >
                <div
                  className={`absolute rounded-full -inset-1 ${isPulsing ? "animate-pulse-glow duration-1000" : ""}`}
                  style={{
                    background: `radial-gradient(circle, rgba(94, 197, 126, 0.3) 0%, rgba(94, 197, 126, 0) 70%)`,
                    width: `${item.energy * 0.5 + 50}px`,
                    height: `${item.energy * 0.5 + 50}px`,
                    left: `-${(item.energy * 0.5 + 50 - 40) / 2}px`,
                    top: `-${(item.energy * 0.5 + 50 - 40) / 2}px`,
                  }}
                ></div>

                <div
                  className={`
                  w-12 h-12 rounded-full flex items-center justify-center glass-strong
                  ${
                    isExpanded
                      ? "bg-primary text-white scale-150 neon-glow"
                      : isRelated
                        ? "bg-emerald-500 text-white animate-pulse-glow"
                        : "bg-white/80 text-primary hover:bg-primary hover:text-white"
                  }
                  border-2 border-primary/30
                  transition-all duration-300 transform hover:scale-110
                `}
                >
                  <Icon size={18} />
                </div>

                <div
                  className={`
                  absolute top-14 left-1/2 transform -translate-x-1/2 whitespace-nowrap
                  text-xs font-semibold tracking-wider
                  transition-all duration-300
                  ${isExpanded ? "text-primary scale-125 font-anton" : "text-gray-700"}
                `}
                >
                  {item.title}
                </div>

                {isExpanded && (
                  <Card className="absolute top-20 left-1/2 -translate-x-1/2 w-72 glass-strong border-primary/30 shadow-2xl shadow-primary/20 overflow-visible">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-px h-3 bg-primary/50"></div>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-center">
                        <Badge className={`px-3 py-1 text-xs font-bold ${getStatusStyles(item.status)}`}>
                          {item.status === "completed"
                            ? "LIVE"
                            : item.status === "in-progress"
                              ? "DEVELOPING"
                              : "PLANNED"}
                        </Badge>
                        <span className="text-xs font-mono text-gray-500">{item.date}</span>
                      </div>
                      <CardTitle className="text-base mt-2 font-anton text-gray-900">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm text-gray-600">
                      <p className="leading-relaxed">{item.content}</p>

                      <div className="mt-4 pt-3 border-t border-gray-200">
                        <div className="flex justify-between items-center text-xs mb-2">
                          <span className="flex items-center text-gray-500">
                            <Zap size={12} className="mr-1 text-primary" />
                            Activity Level
                          </span>
                          <span className="font-mono font-bold text-primary">{item.energy}%</span>
                        </div>
                        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-primary to-emerald-500 transition-all duration-1000 ease-out"
                            style={{ width: `${item.energy}%` }}
                          ></div>
                        </div>
                      </div>

                      {item.relatedIds.length > 0 && (
                        <div className="mt-4 pt-3 border-t border-gray-200">
                          <div className="flex items-center mb-3">
                            <Link size={12} className="text-primary mr-2" />
                            <h4 className="text-xs uppercase tracking-wider font-bold text-gray-700">
                              Connected Components
                            </h4>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {item.relatedIds.map((relatedId) => {
                              const relatedItem = timelineData.find((i) => i.id === relatedId)
                              return (
                                <Button
                                  key={relatedId}
                                  variant="outline"
                                  size="sm"
                                  className="flex items-center h-7 px-3 py-0 text-xs border-primary/30 bg-primary/5 hover:bg-primary hover:text-white transition-all duration-200"
                                  onClick={(e) => {
                                    e.stopPropagation()
                                    toggleItem(relatedId)
                                  }}
                                >
                                  {relatedItem?.title}
                                  <ArrowRight size={10} className="ml-1" />
                                </Button>
                              )
                            })}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                )}
              </div>
            )
          })}
        </div>
      </div>

      {/* Instructions */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 glass-strong rounded-full px-6 py-3">
        <p className="text-sm text-gray-600 font-medium">
          Click on any component to explore • Auto-rotating ecosystem view
        </p>
      </div>
    </div>
  )
}
