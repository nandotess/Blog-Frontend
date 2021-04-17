import React from 'react';
import HeadMetatags from '../components/HeadMetatags';

const NotFoundPage = () => {
  const title = 'Page not found';
  const description = title;

  return (
    <>
      <HeadMetatags title={title} description={description} />
      <h1>{title}</h1>
    </>
  );
};

export default NotFoundPage;
