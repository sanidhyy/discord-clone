import { redirectToSignIn } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import type { PropsWithChildren } from "react";

import { ServerSidebar } from "@/components/server/server-sidebar";
import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";

const ServerIdLayout = async ({
  children,
  params,
}: PropsWithChildren<{
  params: {
    serverId: string;
  };
}>) => {
  const profile = await currentProfile();

  if (!profile) return redirectToSignIn();

  const server = await db.server.findUnique({
    where: {
      id: params.serverId,
      members: {
        some: {
          profileId: profile.id,
        },
      },
    },
  });

  if (!server) redirect("/");

  return (
    <div className="h-full">
      <aside className="hidden md:flex h-full w-60 -20 flex-col fixed inset-y-0">
        <ServerSidebar serverId={params.serverId} />
      </aside>
      <main className="h-full md:pl-60">{children}</main>
    </div>
  );
};

export default ServerIdLayout;
