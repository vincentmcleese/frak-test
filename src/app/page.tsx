"use client";

import { FrakProvider } from "./components/FrakProvider";
import LoginButton from "./components/LoginButton";
import WalletStatus from "./components/WalletStatus";

export default function Home() {
  return (
    <FrakProvider>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <h1>My Frak Powered app</h1>
        <WalletStatus />
        <LoginButton />
      </div>
    </FrakProvider>
  );
}
