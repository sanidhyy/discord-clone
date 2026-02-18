import { type NextRequest, NextResponse } from "next/server";
import { v4 as uuid } from "uuid";

import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";

export async function PATCH(
  _req: NextRequest,
  { params }: { params: Promise<{ serverId: string }> },
) {
  try {
    const { serverId } = await params;

    const profile = await currentProfile();

    if (!profile) return new NextResponse("Unauthorized.", { status: 401 });

    if (!serverId)
      return new NextResponse("Server ID is missing.", { status: 400 });

    const server = await db.server.update({
      where: {
        id: serverId,
        profileId: profile.id,
      },
      data: {
        inviteCode: uuid(),
      },
    });

    return NextResponse.json(server);
  } catch (error: unknown) {
    console.error("[SERVER_ID]: ", error);
    return new NextResponse("Internal Server Error.", { status: 500 });
  }
}
