import React from 'react';
import PropTypes from 'prop-types';
import ErrorPage from 'next/error';
import { useRouter } from 'next/router';

import { getClient, sanityClient } from '@lib/sanity.server';
import { usePreviewSubscription } from '@lib/sanity';
import { ALL_POSTS_QUERY, POST_QUERY } from '@lib/sanity.queries';

import HeadMetatags from '@components/wrapper/HeadMetatags';
import Loading from '@components/global/Loading';
import Post from '@components/Post';

const PostPage = ({ post: initialPost = {}, preview }) => {
  const router = useRouter();
  const { id } = router.query;

  if (!router.isFallback && !initialPost._id) {
    return <ErrorPage statusCode={404} />;
  }

  const { data: post } = usePreviewSubscription(POST_QUERY, {
    params: { id },
    initialData: initialPost,
    enabled: preview
  });

  const title = post.title;
  const description = title;

  return (
    <React.Fragment>
      {router.isFallback ? (
        <Loading />
      ) : (
        <React.Fragment>
          <HeadMetatags title={title} description={description} />
          <Post post={post} />
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

PostPage.propTypes = {
  post: PropTypes.object.isRequired,
  preview: PropTypes.bool.isRequired
};

export async function getStaticProps({ params, preview = false }) {
  const id = params.id || '';
  const post = await getClient(preview).fetch(POST_QUERY, { id });

  if (!post._id) {
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
    params: { id: post._id }
  }));

  return { paths, fallback: true };
}

export default PostPage;
