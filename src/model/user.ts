export type User = {
  id: string;
  name: string;
  username: string;
  email: string;
  image?: string;
}

export type SimpleUser = Pick<User, 'username' | 'image'>;

export type HomeUser = User & {
  following: SimpleUser[];
  followers: SimpleUser[];
  bookmarks: string[];
}

export type UserSearchResult = User & {
  followers: number;
}

export type ProfileUser = User & {
  following: number;
  followers: number;
  posts: number;
}