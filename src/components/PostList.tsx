'use client';

import { SimplePost } from "@/model/post";
import useSWR from "swr";
import { GridLoader } from "react-spinners";
import PostListCard from "./PostListCard";


export default function PostList() {
  const { data: posts, isLoading, error } = useSWR<SimplePost[]>('/api/posts');
  // // const post = data?.following;
  console.log(posts)

  return (
    <>
      {isLoading && <div className="w-[470px] bg-white border border-gray-200 rounded-lg mt-3 py-10 text-center"><GridLoader color='red' /></div>}
      {
        posts && posts.map((post) => (
          <PostListCard key={post.id} post={post} />
        ))
      }
    </>

  );
}


