import { NextRequest, NextResponse } from "next/server";
import { getLikedPostsOf, getPostsOf, getSavedPostsOf } from "@/service/posts";

type Context = {
  params: { slug: string[] };
}

export async function GET(_: NextRequest, context: Context) {
  const { slug } = context.params;

  if (!slug || !Array.isArray(slug) || slug.length < 2) {
    return new NextResponse('잘못된 요청입니다.', { status: 400 });
  }

  const [username, query] = slug;

  let request = getPostsOf;
  if (query === 'saved') {
    request = getSavedPostsOf;
  } else if (query === 'liked') {
    request = getLikedPostsOf;
  }

  return request(username)
    .then((data) => NextResponse.json(data)
    );
}