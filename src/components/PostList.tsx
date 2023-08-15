'use client';
import usePosts from '@/hooks/posts';
import PostListCard from './PostListCard';
import GridSpinner from './ui/GridSpinner';

export default function PostList() {
  const { posts, isLoading: loading } = usePosts();

  return (
    <>
      {loading &&
        <div className="w-[470px] bg-white border border-gray-200 rounded-lg mt-3 py-10 text-center">
          <GridSpinner />
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
