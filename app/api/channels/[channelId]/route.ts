import { MemberRole } from "@prisma/client";
import { NextResponse, type NextRequest } from "next/server";

import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";

export async function DELETE(
  req: NextRequest,
  { params }: { params: { channelId: string } }
) {
  try {
    const profile = await currentProfile();

    if (!profile) return new NextResponse("Unauthorized.", { status: 401 });

    const { searchParams } = new URL(req.url);

    const serverId = searchParams.get("serverId");

    if (!serverId)
      return new NextResponse("Server ID is missing.", { status: 400 });

    if (!params?.channelId)
      return new NextResponse("Channel ID is missing.", { status: 400 });

    const server = await db.server.update({
      where: {
        id: serverId,
        members: {
          some: {
            profileId: profile.id,
            role: {
              in: [MemberRole.ADMIN, MemberRole.MODERATOR],
            },
          },
        },
      },
      data: {
        channels: {
          delete: {
            id: params.channelId,
            name: {
              not: "general",
            },
          },
        },
      },
    });

    return NextResponse.json(server);
  } catch (error: unknown) {
    console.error("[CHANNEL_ID_DELETE]: ", error);
    return new NextResponse("Internal Server Error.", { status: 500 });
  }
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: { channelId: string } }
) {
  try {
    const profile = await currentProfile();

    if (!profile) return new NextResponse("Unauthorized.", { status: 401 });

    const { name, type } = await req.json();
    const { searchParams } = new URL(req.url);

    const serverId = searchParams.get("serverId");

    if (!serverId)
      return new NextResponse("Server ID is missing.", { status: 400 });

    if (!params?.channelId)
      return new NextResponse("Channel ID is missing.", { status: 400 });

    if (name === "general")
      return new NextResponse('Name cannot be "general"', { status: 400 });

    const server = await db.server.update({
      where: {
        id: serverId,
        members: {
          some: {
            profileId: profile.id,
            role: {
              in: [MemberRole.ADMIN, MemberRole.MODERATOR],
            },
          },
        },
      },
      data: {
        channels: {
          update: {
            where: {
              id: params.channelId,
              NOT: {
                name: "general",
              },
            },
            data: {
              name,
              type,
            },
          },
        },
      },
    });

    return NextResponse.json(server);
  } catch (error: unknown) {
    console.error("[CHANNEL_ID_PATCH]: ", error);
    return new NextResponse("Internal Server Error.", { status: 500 });
  }
}
