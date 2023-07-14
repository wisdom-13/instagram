import React from 'react';
import Avatar from '../Avatar';

type Props = {
  image: string;
  username: string;
}

export default function PostUserAvatar({ image, username }: Props) {
  return (
    <div className="flex items-center p-3">
      <Avatar image={image} size='medium' />
      <h3 className="font-semibold pl-3">{username}</h3>
    </div>
  );
}

