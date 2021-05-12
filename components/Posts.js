import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import styled from 'styled-components';

import { device } from '@styles/device';

import Post from '@components/Post';

const Row = styled.a`
  border-bottom: 1px solid var(--color-gray-light);
  color: var(--color-black);
  display: block;
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  &:hover {
    text-decoration: none;
  }
  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
  }
  @media ${device.tablet} {
    margin-bottom: 4rem;
    padding-bottom: 4rem;
  }
`;

export default function Posts({ posts }) {
  return (
    <section>
      {posts &&
        posts.map((post, i) => (
          <Link key={i} href={`/post/${post._id}`} passHref={true}>
            <Row>
              <Post post={post} />
            </Row>
          </Link>
        ))}
    </section>
  );
}

Posts.propTypes = {
  posts: PropTypes.array.isRequired
};
