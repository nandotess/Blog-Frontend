import { groq } from 'next-sanity';

export const ALL_POSTS_QUERY = groq`*[_type == "post"]{
  title,
  slug,
  "author": user->displayName,
  mainImage,
  publishedAt,
} | order(publishedAt desc)`;

export const POST_QUERY = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  slug,
  "author": user->displayName,
  mainImage,
  publishedAt,
  body,
}`;
