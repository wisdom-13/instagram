import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";
import { follow, unFollow } from "@/service/user";

export async function PUT(req: NextRequest) {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  if (!user) {
    return new Response('Authentication Error', { status: 401 });
  }

  const { followUserId, follow: isFollow } = await req.json();

  if (!followUserId || isFollow === undefined) {
    return new Response(`Bad Request ${followUserId} + ${isFollow}`, { status: 400 });
  }

  const request = isFollow ? follow : unFollow;

  return request(user.id, followUserId)
    .then(res => NextResponse.json(res))
    .catch(error => new Response(JSON.stringify(error), { status: 500 }))
}