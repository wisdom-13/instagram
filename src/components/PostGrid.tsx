import { FullPost, SimplePost } from '@/model/post';
import useSWR from 'swr';
import GridSpinner from './ui/GridSpinner';
import PostGridCard from './PostGridCard';

type Props = {
  username: string;
  query: string;
}

export default function PostGrid({ username, query }: Props) {
  const { data: posts, isLoading, error } = useSWR<SimplePost[]>(`/api/user/${username}/${query}`);

  return (

    <div className='w-full'>
      {isLoading && <div className='w-full text-center py-8'><GridSpinner /></div>}
      <ul className='grid grid-cols-3 gap-2'>{posts && posts.map((post, index) => <li key={post.id}>
        <PostGridCard post={post} priority={index < 6} />
      </li>)}</ul>
    </div>
  );
}

