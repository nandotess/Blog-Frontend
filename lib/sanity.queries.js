import { groq } from 'next-sanity';

export const ALL_POSTS_QUERY = groq`*[_type == "post"]{
  _id,
  title,
  author->,
  mainImage,
  publishedAt,
} | order(publishedAt desc)`;

export const POST_QUERY = groq`*[_type == "post" && _id == $id][0]{
  _id,
  title,
  author->,
  mainImage,
  publishedAt,
  body,
}`;
