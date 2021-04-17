import React from 'react';
import PropTypes from 'prop-types';
import { getClient } from '../lib/sanity.server';
import { ALL_POSTS_QUERY } from '../lib/sanity.queries';
import HeadMetatags from '../components/HeadMetatags';
import Posts from '../components/Posts';

const IndexPage = ({ posts = [], preview }) => {
  const title = 'Blog';
  const description = title;

  return (
    <>
      <HeadMetatags title={title} description={description} />
      <Posts posts={posts} />
    </>
  );
};

IndexPage.propTypes = {
  posts: PropTypes.array.isRequired,
  preview: PropTypes.bool.isRequired
};

export async function getStaticProps({ preview = false }) {
  const posts = await getClient(preview).fetch(ALL_POSTS_QUERY, {});

  return {
    props: { posts, preview },
    revalidate: 60 * 1 // 1 minute
  };
}

export default IndexPage;
