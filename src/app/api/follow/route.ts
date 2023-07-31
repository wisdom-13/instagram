import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";
import { followUser, unFollowUser } from "@/service/user";

export async function PUT(req: NextRequest) {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  if (!user) {
    return new Response('Authentication Error', { status: 401 });
  }

  const { followUserId, follow } = await req.json();

  if (!followUserId || follow === undefined) {
    return new Response(`Bad Request ${followUserId} + ${follow}`, { status: 400 });
  }

  const request = follow ? followUser : unFollowUser;

  return request(user.id, followUserId)
    .then(res => NextResponse.json(res))
    .catch(error => new Response(JSON.stringify(error), { status: 500 }))
}