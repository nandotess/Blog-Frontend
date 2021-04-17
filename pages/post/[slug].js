import React from 'react';
import PropTypes from 'prop-types';
import ErrorPage from 'next/error';
import { useRouter } from 'next/router';
import { getClient, sanityClient } from '../../lib/sanity.server';
import { usePreviewSubscription } from '../../lib/sanity';
import { ALL_POSTS_QUERY, POST_QUERY } from '../../lib/sanity.queries';
import HeadMetatags from '../../components/HeadMetatags';
import Post from '../../components/Post';

const PostPage = ({ post: initialPost = {}, preview }) => {
  const router = useRouter();
  const { slug } = router.query;

  if (!router.isFallback && !initialPost.slug) {
    return <ErrorPage statusCode={404} />;
  }

  const { data: post } = usePreviewSubscription(POST_QUERY, {
    params: { slug },
    initialData: initialPost,
    enabled: preview
  });

  const title = post.title;
  const description = title;

  return (
    <>
      {router.isFallback ? (
        <p>Loading...</p>
      ) : (
        <>
          <HeadMetatags title={title} description={description} />
          <Post post={post} />
        </>
      )}
    </>
  );
};

PostPage.propTypes = {
  post: PropTypes.object.isRequired,
  preview: PropTypes.bool.isRequired
};

export async function getStaticProps({ params, preview = false }) {
  const slug = params.slug || '';
  const post = await getClient(preview).fetch(POST_QUERY, { slug });

  if (!post.slug) {
    return {
      notFound: true
    };
  }

  return {
    props: { post, preview },
    revalidate: 60 * 1 // 1 minute
  };
}

export async function getStaticPaths() {
  const posts = await sanityClient.fetch(ALL_POSTS_QUERY);

  const paths = posts.map((post) => ({
    params: { slug: '' + post.slug.current }
  }));

  return { paths, fallback: true };
}

export default PostPage;
