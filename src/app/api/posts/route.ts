import { createPost, deletePost, getFollowingPostsOf } from '@/service/posts';
import { NextResponse, NextRequest } from 'next/server';
import { withSessionUser } from '@/util/session';

export async function GET() {
  return withSessionUser(async (user) =>
    getFollowingPostsOf(user.username) //
      .then((data) => NextResponse.json(data))
  )
}

export async function POST(req: NextRequest) {
  return withSessionUser(async (user) => {
    const form = await req.formData();
    const text = form.get('text')?.toString();
    const file = form.get('file') as Blob;

    if (!text || !file) {
      return new Response('Bad Request', { status: 400 });
    }

    return createPost(user.id, text, file) //
      .then((data) => NextResponse.json(data));
  })
}

export async function PUT(req: NextRequest) {
  return withSessionUser(async () => {
    const { postId } = await req.json();

    if (postId == null) {
      return new Response('Bad Request', { status: 400 });
    }

    return deletePost(postId)
      .then(res => NextResponse.json(res))
      .catch(error => new Response(JSON.stringify(error), { status: 500 }))
  })
}