"use client"
import { motion } from "motion/react"
import { Shield, Zap, TrendingUp, Coins, SparklesIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface MorphifyFlowDiagramProps {
  className?: string
  circleText?: string
  badgeTexts?: {
    first: string
    second: string
    third: string
    fourth: string
  }
  buttonTexts?: {
    first: string
    second: string
  }
  title?: string
  lightColor?: string
}

const MorphifyFlowDiagram = ({
  className,
  circleText,
  badgeTexts,
  buttonTexts,
  title,
  lightColor,
}: MorphifyFlowDiagramProps) => {
  return (
    <div className={cn("relative flex h-[350px] w-full max-w-[500px] flex-col items-center", className)}>
      {/* SVG Paths  */}
      <svg className="h-full sm:w-full text-muted-foreground" width="100%" height="100%" viewBox="0 0 200 100">
        <g stroke="currentColor" fill="none" strokeWidth="0.4" strokeDasharray="100 100" pathLength="100">
          <path d="M 31 10 v 15 q 0 5 5 5 h 59 q 5 0 5 5 v 10" />
          <path d="M 77 10 v 10 q 0 5 5 5 h 13 q 5 0 5 5 v 10" />
          <path d="M 124 10 v 10 q 0 5 -5 5 h -14 q -5 0 -5 5 v 10" />
          <path d="M 170 10 v 15 q 0 5 -5 5 h -60 q -5 0 -5 5 v 10" />
          {/* Animation For Path Starting */}
          <animate
            attributeName="stroke-dashoffset"
            from="100"
            to="0"
            dur="1s"
            fill="freeze"
            calcMode="spline"
            keySplines="0.25,0.1,0.5,1"
            keyTimes="0; 1"
          />
        </g>
        {/* Green Lights */}
        <g mask="url(#morphify-mask-1)">
          <circle className="morphify-flow morphify-light-1" cx="0" cy="0" r="12" fill="url(#morphify-green-grad)" />
        </g>
        <g mask="url(#morphify-mask-2)">
          <circle className="morphify-flow morphify-light-2" cx="0" cy="0" r="12" fill="url(#morphify-green-grad)" />
        </g>
        <g mask="url(#morphify-mask-3)">
          <circle className="morphify-flow morphify-light-3" cx="0" cy="0" r="12" fill="url(#morphify-green-grad)" />
        </g>
        <g mask="url(#morphify-mask-4)">
          <circle className="morphify-flow morphify-light-4" cx="0" cy="0" r="12" fill="url(#morphify-green-grad)" />
        </g>
        {/* Feature Buttons */}
        <g stroke="currentColor" fill="none" strokeWidth="0.4">
          {/* Security */}
          <g>
            <rect fill="#5ec57e" x="14" y="5" width="34" height="10" rx="5"></rect>
            <Shield x="18" y="7.5" width="5" height="5" stroke="white" strokeWidth="1" fill="none" />
            <text x="26" y="12" fill="white" stroke="none" fontSize="4" fontWeight="600">
              {badgeTexts?.first || "SECURE"}
            </text>
          </g>
          {/* Speed */}
          <g>
            <rect fill="#5ec57e" x="60" y="5" width="34" height="10" rx="5"></rect>
            <Zap x="64" y="7.5" width="5" height="5" stroke="white" strokeWidth="1" fill="white" />
            <text x="72" y="12" fill="white" stroke="none" fontSize="4" fontWeight="600">
              {badgeTexts?.second || "FAST"}
            </text>
          </g>
          {/* AI Credit */}
          <g>
            <rect fill="#5ec57e" x="108" y="5" width="34" height="10" rx="5"></rect>
            <TrendingUp x="112" y="7.5" width="5" height="5" stroke="white" strokeWidth="1" fill="none" />
            <text x="120" y="12" fill="white" stroke="none" fontSize="4" fontWeight="600">
              {badgeTexts?.third || "SMART"}
            </text>
          </g>
          {/* DeFi */}
          <g>
            <rect fill="#5ec57e" x="150" y="5" width="40" height="10" rx="5"></rect>
            <Coins x="154" y="7.5" width="5" height="5" stroke="white" strokeWidth="1" fill="none" />
            <text x="162" y="12" fill="white" stroke="none" fontSize="4" fontWeight="600">
              {badgeTexts?.fourth || "DeFi"}
            </text>
          </g>
        </g>
        <defs>
          {/* Masks for light paths */}
          <mask id="morphify-mask-1">
            <path d="M 31 10 v 15 q 0 5 5 5 h 59 q 5 0 5 5 v 10" strokeWidth="0.5" stroke="white" />
          </mask>
          <mask id="morphify-mask-2">
            <path d="M 77 10 v 10 q 0 5 5 5 h 13 q 5 0 5 5 v 10" strokeWidth="0.5" stroke="white" />
          </mask>
          <mask id="morphify-mask-3">
            <path d="M 124 10 v 10 q 0 5 -5 5 h -14 q -5 0 -5 5 v 10" strokeWidth="0.5" stroke="white" />
          </mask>
          <mask id="morphify-mask-4">
            <path d="M 170 10 v 15 q 0 5 -5 5 h -60 q -5 0 -5 5 v 10" strokeWidth="0.5" stroke="white" />
          </mask>
          {/* Green Gradient */}
          <radialGradient id="morphify-green-grad" fx="1">
            <stop offset="0%" stopColor={lightColor || "#5ec57e"} />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>
      </svg>
      {/* Main Box */}
      <div className="absolute bottom-10 flex w-full flex-col items-center">
        {/* bottom shadow */}
        <div className="absolute -bottom-4 h-[100px] w-[62%] rounded-lg bg-primary/10" />
        {/* box title */}
        <div className="absolute -top-3 z-20 flex items-center justify-center rounded-lg border bg-primary px-2 py-1 sm:-top-4 sm:py-1.5">
          <SparklesIcon className="size-3 text-white" />
          <span className="ml-2 text-[10px] text-white font-medium">
            {title ? title : "Advanced DeFi Technology Stack"}
          </span>
        </div>
        {/* box outer circle */}
        <div className="absolute -bottom-8 z-30 grid h-[60px] w-[60px] place-items-center rounded-full border-t bg-primary font-semibold text-xs text-white">
          {circleText ? circleText : "DeFi"}
        </div>
        {/* box content */}
        <div className="relative z-10 flex h-[150px] w-full items-center justify-center overflow-hidden rounded-lg border bg-background shadow-md">
          {/* Badges */}
          <div className="absolute bottom-8 left-12 z-10 h-7 rounded-full bg-primary px-3 text-xs border flex items-center gap-2 ">
            <Shield className="size-4 text-white" />
            <span className="text-white">{buttonTexts?.first || "Morphify"}</span>
          </div>
          <div className="absolute right-16 z-10 hidden h-7 rounded-full bg-emerald-600 px-3 text-xs sm:flex border items-center gap-2">
            <Coins className="size-4 text-white" />
            <span className="text-white">{buttonTexts?.second || "Morph L2"}</span>
          </div>
          {/* Animated Circles */}
          <motion.div
            className="absolute -bottom-14 h-[100px] w-[100px] rounded-full border-t bg-primary/5"
            animate={{
              scale: [0.98, 1.02, 0.98, 1, 1, 1, 1, 1, 1],
            }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          />
          <motion.div
            className="absolute -bottom-20 h-[145px] w-[145px] rounded-full border-t bg-primary/5"
            animate={{
              scale: [1, 1, 1, 0.98, 1.02, 0.98, 1, 1, 1],
            }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          />
          <motion.div
            className="absolute -bottom-[100px] h-[190px] w-[190px] rounded-full border-t bg-primary/5"
            animate={{
              scale: [1, 1, 1, 1, 1, 0.98, 1.02, 0.98, 1, 1],
            }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          />
          <motion.div
            className="absolute -bottom-[120px] h-[235px] w-[235px] rounded-full border-t bg-primary/5"
            animate={{
              scale: [1, 1, 1, 1, 1, 1, 0.98, 1.02, 0.98, 1],
            }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          />
        </div>
      </div>
    </div>
  )
}

export default MorphifyFlowDiagram
