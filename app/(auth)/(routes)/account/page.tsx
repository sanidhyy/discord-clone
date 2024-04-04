"use client";

import { UserProfile } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { MoveLeft } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

const AccountPage = () => {
  const { resolvedTheme } = useTheme();

  return (
    <div className="md:flex space-y-5 h-full space-x-20">
      <Link
        href="/"
        className="group flex h-5 w-auto items-center justify-center space-x-2 mt-10 text-zinc-500 hover:text-zinc-800 focus-visible:text-zinc-800 dark:text-zinc-200 dark:hover:text-zinc-300 focus-visible:hover:text-zinc-300"
      >
        <MoveLeft className="h-5 w-5 group-hover:-translate-x-0.5 group-focus-visible:-translate-x-0.5 transition" />
        <Image
          src="/logo.png"
          alt="Discord Clone"
          height={18}
          width={18}
          className="group-hover:scale-[0.9] group-focus-visible:scale-[0.9]"
        />
        <span className="font-xs font-semibold">Go back</span>
      </Link>
      <UserProfile
        appearance={{
          baseTheme: resolvedTheme === "dark" ? dark : undefined,
        }}
      />
    </div>
  );
};

export default AccountPage;
