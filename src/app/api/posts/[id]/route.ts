import { deletePost, getPost } from '@/service/posts';
import { NextRequest, NextResponse } from 'next/server';
import { withSessionUser } from '@/util/session';

type Context = {
  params: { id: string };
};

export async function GET(_: NextRequest, context: Context) {
  return withSessionUser(async () =>
    getPost(context.params.id)
      .then((data) => NextResponse.json(data))
  )
}

export async function PUT(req: NextRequest, context: Context) {
  return withSessionUser(async (user) => {
    const postId = context.params.id;
    const { userId } = await req.json();

    if (userId !== user.id) {
      return new Response('Bad Request', { status: 400 });
    }

    return deletePost(postId)
      .then(res => NextResponse.json(res))
      .catch(error => new Response(JSON.stringify(error), { status: 500 }))
  })
}