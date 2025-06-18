# Morphify Frontend

## Overview
This directory contains the source code for the Morphify frontend application. The goal is to build an intuitive, responsive, and user-friendly interface for the Morphify platform, making decentralized micro-lending accessible to everyone.

## Technology Stack
*   **Framework:** [Next.js](https://nextjs.org/)
*   **Language:** JavaScript/TypeScript
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **State Management:** React Context/Hooks (or a library like Zustand for more complex state)
*   **Web3 Interaction:** [Ethers.js](https://ethers.io/) or [Viem](https://viem.sh/) for wallet connection and smart contract interaction.

## Key Pages & Dashboards

### Public-Facing Pages
These pages provide information to all visitors.
*   **/ (Home/Landing):** Introduces the platform's mission and value proposition.
*   **/about:** Details the project's vision and team.
*   **/how-it-works:** A step-by-step guide for borrowers and lenders.
*   **/blog:** For news, updates, and educational content.
*   **/contact:** A way for users to get in touch.
*   **/developers:** Documentation for developers wanting to build on Morphify.
*   **/terms & /privacy:** Legal and privacy policies.

### Application Dashboards (Authenticated Routes)
These pages are accessible after a user connects their wallet.
*   **/dashboard:** The central hub summarizing a user's activity.
*   **/borrow:** To apply for new loans and manage existing ones.
*   **/lend:** To provide capital to the lending pool and manage offers.
*   **/marketplace:** A public view of all available loan requests and offers.
*   **/profile:** Detailed view of a user's Morph Credit Score and transaction history.

## Key UI Components to Build
*   **Wallet Connection:** A seamless modal to connect with wallets like MetaMask and WalletConnect.
*   **Notification System:** Toasts/Pop-ups for transaction status (pending, success, error).
*   **Confirmation Modals:** For critical actions like applying for or funding a loan.
*   **Data Display Cards:** Reusable components to display loan details, offers, and user stats.
*   **Forms:** For loan applications, loan offers, and user settings.
*   **Data Visualization:** Charts and graphs to visualize credit score composition, earnings, and repayment progress.
