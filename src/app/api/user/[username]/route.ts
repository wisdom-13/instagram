import { NextRequest, NextResponse } from "next/server";
import { getUserProfile } from "@/service/user";

type Context = {
  params: { username: string };
}

export async function GET(_: NextRequest, context: Context) {
  return getUserProfile(context.params.username)
    .then((data) => NextResponse.json(data)
    );
}