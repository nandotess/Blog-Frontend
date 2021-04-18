import React from 'react';
import PropTypes from 'prop-types';
// import Image from 'next/image';
import styled from 'styled-components';
import formatDate from '../util/formatDate';
import { urlForImage } from '../lib/sanity';
import { device } from '../styles/device';

const Wrapper = styled.article`
  text-align: left;
`;

const Row = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

const ColumnLeft = styled.div`
  flex: 0 0 auto;
  padding: 0 0 2rem 0;
  width: 100%;
  @media ${device.tablet} {
    padding: 0 2rem 0 0;
    width: auto;
  }
`;

const ColumnRight = styled.div`
  flex: 0 0 auto;
  width: 100%;
  @media ${device.tablet} {
    display: flex;
    flex: 1 1 0px;
    flex-direction: column;
    justify-content: center;
    width: auto;
  }
`;

const Image = styled.figure`
  border-radius: 0.5rem;
  line-height: 0;
  margin: 0;
  overflow: hidden;
  img {
    max-width: 100%;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  @media ${device.tablet} {
    font-size: 4rem;
  }
`;

const Author = styled.p`
  margin-bottom: 0;
`;

const Date = styled.time`
  color: var(--color-gray);
  display: block;
  margin-bottom: 1.5rem;
`;

const Body = styled.div`
  margin-top: 2rem;
`;

export default function Post({ post }) {
  return (
    <Wrapper>
      <Row>
        {post.mainImage && (
          <ColumnLeft>
            <Image>
              <img
                src={urlForImage(post.mainImage).width('300').url()}
                alt={post.title}
              />
            </Image>
          </ColumnLeft>
        )}
        <ColumnRight>
          <Title>{post.title}</Title>
          <Date dateTime={formatDate(post.publishedAt, 'iso')}>
            {formatDate(post.publishedAt)}
          </Date>
          <Author>By {post.author.displayName}</Author>
        </ColumnRight>
      </Row>
      {post.body && (
        <Body
          dangerouslySetInnerHTML={{
            __html: post.body
          }}
        />
      )}
    </Wrapper>
  );
}

Post.propTypes = {
  post: PropTypes.object.isRequired
};
