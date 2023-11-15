'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { ChangeEvent, DragEvent, FormEvent, useRef, useState } from 'react';
import PostUserAvatar from './PostUserAvatar';
import Button from './ui/Button';
import GridSpinner from './ui/GridSpinner';
import MediaIcon from './ui/icons/MediaIcon';
import { FullPost } from '@/model/post';
import { AuthUser, HomeUser } from '@/model/user';

type Props = {
  user: HomeUser | AuthUser;
  post?: FullPost;
};
export default function NewPost({ user: { id, username, image }, post }: Props) {
  const [dragging, setDragging] = useState(false);
  const [file, setFile] = useState<File>();
  const [isFile, setIsFile] = useState(file || post?.image ? true : false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>();
  const textRef = useRef<HTMLTextAreaElement>(null);
  const router = useRouter();


  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const files = e.target?.files;
    if (files && files[0]) {
      setFile(files[0]);
    }
  };
  const handleDrag = (e: DragEvent) => {
    if (e.type === 'dragenter') {
      setDragging(true);
    } else if (e.type === 'dragleave') {
      setDragging(false);
    }
  };
  const handleDragOver = (e: DragEvent) => {
    e.preventDefault();
  };
  const handleDrop = (e: DragEvent) => {
    e.preventDefault();
    setDragging(false);
    const files = e.dataTransfer?.files;
    if (files && files[0]) {
      setFile(files[0]);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!isFile) return;

    setLoading(true);
    const formData = new FormData();
    formData.append('text', textRef.current?.value ?? '');

    if (post) {
      formData.append('id', post.id);
    }

    if (file) {
      formData.append('file', file);
    }

    fetch('/api/posts/', { method: post ? 'PUT' : 'POST', body: formData })
      .then((res) => {
        if (!res.ok) {
          setError(`${res.status} ${res.statusText}`);
          return;
        }

        if (!post) {
          router.push('/');
        } else {
          location.reload();
        }

      })
      .catch((err) => setError(err.toString()))
      .finally(() => setLoading(false));
  };

  return (
    <div className='w-[1000px] h-[80%]'>
      {error && (
        <p className='w-full bg-red-500 text-white rounded-md px-3 py-1 text-center font-bold mb-3'>{error}</p>
      )}
      <form
        className='w-full h-full bg-white border border-gray-200 rounded-lg'
        onSubmit={handleSubmit}>
        {loading && (
          <div className='absolute inset-0 z-20 text-center pt-[20%] bg-black/80'>
            <GridSpinner />
          </div>
        )}

        <div className='flex items-center h-[48px] justify-between border-b border-gray-200'>
          <div className='w-[80px]'></div>
          <h1 className='font-semibold'>
            {post ? '정보 수정' : '새 게시물 만들기'}
          </h1>
          <button
            className={`font-semibold w-[80px] text-sm ${isFile ? 'text-blue-600' : 'text-blue-200'}`}
            disabled={!isFile}>
            {post ? '완료' : '공유하기'}
          </button>
        </div>
        <div className='flex h-[calc(100%-48px)]'>
          <div className='w-3/5 h-full flex flex-col items-center justify-center text-center'>
            <input
              className='hidden'
              name='input'
              id='input-upload'
              type='file'
              accept='image/*'
              onChange={handleChange}
            />
            <label
              className={`flex flex-col items-center justify-center w-full h-full ${dragging && 'bg-gray-100'}`}
              htmlFor='input-upload'
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDragOver}
              onDrop={handleDrop}
            >
              {!isFile && (
                <>
                  <MediaIcon className={`${dragging && 'text-blue-500'}`} />
                  <p className='text-2xl'>사진을 여기에 끌어다 놓으세요</p>
                  <Button type={'button'} className='mt-5' text='컴퓨터에서 선택' blue={true}></Button>
                </>
              )}
              {isFile &&
                <div className='relative w-full h-full overflow-hidden'>
                  <Image
                    className="w-full h-full object-cover aspect-square"
                    src={file ? URL.createObjectURL(file) : post?.image}
                    alt='local file'
                    width={600}
                    height={600} />
                </div>
              }
            </label>
          </div>
          <div className='w-2/5 border-l border-gray-200'>
            <PostUserAvatar username={username} image={image} />
            <div className='px-3 border-b border-gray-200'>
              <textarea
                name='text'
                id='input-text'
                className='w-full resize-none outline-none'
                placeholder='문구 입력...'
                rows={10}
                required
                ref={textRef}
                defaultValue={post?.comments[0].comment}
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
