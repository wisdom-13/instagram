import { client } from "./sanity";

type OAuthUser = {
  id: string;
  email: string;
  name: string;
  username: string;
  image?: string | null;
}

export async function addUser({ id, username, email, name, image }: OAuthUser) {
  return client.createIfNotExists({
    _id: id,
    _type: 'user',
    username,
    email,
    name,
    image,
    following: [],
    followers: [],
    bookmarks: [],
  })
}

export async function getUserByUsername(username: string) {
  return client.fetch(
    `*[_type == "user" && username == "${username}"][0]{
      ...,
      "id": _id,
      following[] -> {username, image},
      followers[] -> {username, image},
      "bookmarks":bookmarks[]->id
    }`
  )
}

export async function searchUsers(keyword: string | null) {
  const query = keyword ? ` && (username match "*${keyword}*") || (name match "*${keyword}*")` : '';

  return client.fetch(
    `*[_type == "user" ${query}]{
      ...,
      "followers": count(followers),
    }`
  )
}

export async function getUserProfile(username: string) {
  return client.fetch(
    `*[_type == "user" && username == "${username}"][0]{
      ...,
      "id": _id,
      "followers": count(followers),
      "following": count(following),
      "posts": count(*[_type == "post" && author->username == "${username}"])
    }`
  ).then((user) => ({
    ...user,
    followers: user.followers ?? 0,
    following: user.following ?? 0,
    posts: user.posts ?? 0,
  }))
}