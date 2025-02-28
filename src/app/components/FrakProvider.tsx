"use client";

import React from "react";
import {
  FrakConfigProvider,
  FrakIFrameClientProvider,
} from "@frak-labs/react-sdk";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { PropsWithChildren } from "react";

const queryClient = new QueryClient();

const nexusConfig = {
  metadata: {
    name: "Your App Name",
    // Add any custom CSS if needed
  },
  // The domain will be automatically set to window.location.host
};

export function FrakProvider({ children }: PropsWithChildren) {
  return (
    <FrakConfigProvider config={nexusConfig}>
      <FrakIFrameClientProvider>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </FrakIFrameClientProvider>
    </FrakConfigProvider>
  );
}
