'use client';

import { SimplePost } from "@/model/post";
import useSWR from "swr";
import Avatar from "./Avatar";
import Image from "next/image";
import HeartIcon from "./ui/icons/HeartIcon";
import BookmarkIcon from "./ui/icons/BookmarkIcon";
import ChatbubbleIcon from "./ui/icons/ChatbubbleIcon";


export default function PostList() {
  const { data: posts, isLoading, error } = useSWR<SimplePost[]>('/api/posts');
  // // const post = data?.following;
  console.log(posts)

  return (
    <>
      {
        posts && posts.map((post) => (

          <div key={post.id} className="w-[470px] bg-white border border-gray-200 rounded-lg mt-3">
            <div className="flex items-center p-3">
              <Avatar image={post.userImage} size='medium' />
              <h3 className="font-semibold pl-3">{post.username}</h3>
            </div>
            <div>
              <Image src={post.image} width={470} height={470} alt={post.username} />
            </div>
            <div className="p-3">
              <div className="flex justify-between">
                <HeartIcon />
                <BookmarkIcon />
              </div>
              <div className="text-sm py-3">
                <b>좋아요 1개</b>
              </div>
              <div className="text-sm">
                <p><b className="pr-1">{post.username}</b>{post.text}</p>
              </div>
            </div>
            <div className="flex border-t border-gray-200 p-3 text-sm">
              <input className="flex-grow outline-none" type="text" placeholder="댓글 달기..." />
              <button className="text-blue-600 font-semibold w-[40px]">게시</button>
            </div>
          </div>
        ))
      }
    </>

  );
}


