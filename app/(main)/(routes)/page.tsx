"use client";

import { UserButton } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { useTheme } from "next-themes";

import { ModeToggle } from "@/components/mode-toggle";

const HomePage = () => {
  const { theme } = useTheme();

  return (
    <div className="h-full flex flex-col gap-y-4 items-center justify-center">
      <UserButton
        afterSignOutUrl="/"
        appearance={{
          baseTheme: theme === "dark" ? dark : undefined,
        }}
      />

      <ModeToggle />
    </div>
  );
};

export default HomePage;
