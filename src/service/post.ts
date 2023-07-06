import { client } from "./sanity";

const simplePostProjection = `
  ...,
  "username" : author->username,
  "userImage" : author->image,
  "image": photo.asset->url,
  "likes": likes[]->username,
  "text": comments[0].comment,
  "comments": count(comments),
  "id": _id,
  "createdAt": _createdAt,
`;

export async function getFollowingPostsOf(username: string) {
  return client.fetch(
    `
    *[_type == "post" && author->username == "${username}"
      || author._ref in *[_type == "user" && username == "${username}"].following[]._ref
      | order(_createdAt desc)]{${simplePostProjection}}

    `
  )
}


// *[_type == "book" && author._ref in *[_type=="author" && name=="John Doe"]._id ]{...}