"use client";

import Link from "next/link";
import { useEffect } from "react";

import { Button } from "@/components/ui/button";

const Error = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="h-full flex flex-col items-center justify-center space-y-4">
      <h2 className="text-xl font-medium">Something went wrong.</h2>

      <Button variant="secondary" asChild>
        <Link href="/">Home</Link>
      </Button>

      <Button variant="primary" onClick={() => reset()}>
        Try again
      </Button>
    </div>
  );
};

export default Error;
