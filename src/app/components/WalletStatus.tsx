"use client";

import { useWalletStatus } from "@frak-labs/react-sdk";

/**
 * Simple wallet status component
 */
export default function WalletStatus() {
  const { data: walletStatus, isLoading, error } = useWalletStatus();

  if (isLoading) return <div>Loading wallet status...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      Wallet status:{" "}
      {walletStatus?.key === "connected" ? "Connected" : "Not connected"}
    </div>
  );
}
