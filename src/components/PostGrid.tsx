import usePosts from '@/hooks/posts';
import PostGridCard from './PostGridCard';
import GridSpinner from './ui/GridSpinner';

export default function PostGrid() {
  const { posts, isLoading } = usePosts();

  return (
    <div className='w-full'>
      {isLoading && <div className='w-full text-center py-8'><GridSpinner /></div>}
      <ul className='grid grid-cols-3 gap-2'>{posts && posts.map((post, index) => <li key={post.id}>
        <PostGridCard post={post} priority={index < 6} />
      </li>)}</ul>
    </div>
  );
}
