'use client';

import { SimplePost } from "@/model/post";
import useSWR from "swr";


export default function PostList() {
  const { data: posts, isLoading, error } = useSWR<SimplePost[]>('/api/posts');
  // // const post = data?.following;


  return (
    <>
      {
        posts && posts.map((post) => (
          <div key={post.id} className="w-[470px] bg-white p-3 border border-gray-200 rounded-lg text-center pr-0 mt-3">
            {post.text}
          </div>
        ))
      }
    </>

  );
}


