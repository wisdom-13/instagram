import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";
import { searchUsers } from "@/service/user";

export async function GET() {
  return searchUsers(null)
    .then((data) => NextResponse.json(data)
    );
}