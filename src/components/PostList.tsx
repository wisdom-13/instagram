'use client';

import PostListCard from "./PostListCard";
import GridSpinner from "./ui/GridSpinner";
import usePosts from "@/hooks/usePosts";


export default function PostList() {
  const { posts, isLoading, error } = usePosts();
  return (
    <>
      {isLoading &&
        <div className="w-[470px] bg-white border border-gray-200 rounded-lg mt-3 py-10 text-center">
          <GridSpinner color='red' />
        </div>
      }
      {
        posts && posts.map((post, index) => (
          <PostListCard key={post.id} post={post} priority={index < 2} />
        ))
      }
    </>

  );
}


