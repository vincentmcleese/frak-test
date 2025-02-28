"use client";

import { useDisplayModal } from "@frak-labs/react-sdk";

/**
 * Simple login with frak button
 */
export default function LoginButton() {
  const { mutate: displayModal, isPending } = useDisplayModal();

  const handleLogin = () => {
    displayModal({
      steps: {
        login: {},
      },
    });
  };

  return (
    <button onClick={handleLogin} disabled={isPending} type={"button"}>
      {isPending ? "Logging in..." : "Login with Frak"}
    </button>
  );
}
