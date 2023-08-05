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
      "bookmarks":bookmarks[]->_id
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


export async function addBookmark(userId: string, postId: string) {
  return client.patch(userId)
    .setIfMissing({ bookmarks: [] })
    .append('bookmarks', [
      {
        _ref: postId,
        _type: 'reference'
      }
    ])
    .commit({ autoGenerateArrayKeys: true })
}

export async function removeBookmark(userId: string, postId: string) {
  return client.patch(userId)
    .unset([`bookmarks[_ref=="${postId}"]`])
    .commit()
}

export async function follow(userId: string, followUserId: string) {
  return client.transaction()
    .patch(userId, (user) =>
      user
        .setIfMissing({ following: [] })
        .append('following', [{ _ref: followUserId, _type: 'reference' }])
    )
    .patch(followUserId, (user) =>
      user
        .setIfMissing({ followers: [] })
        .append('followers', [{ _ref: userId, _type: 'reference' }])
    )
    .commit({ autoGenerateArrayKeys: true })
}

export async function unFollow(userId: string, followUserId: string) {
  return client.transaction()
    .patch(userId, (user) =>
      user.unset([`following[_ref=="${followUserId}"]`])
    )
    .patch(followUserId, (user) =>
      user.unset([`followers[_ref=="${userId}"]`])
    )
    .commit()
}