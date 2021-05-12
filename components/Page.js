import React from 'react';
import PropTypes from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';

import { device } from '@styles/device';

import Header from '@components/wrapper/Header';
import Footer from '@components/wrapper/Footer';

const GlobalStyles = createGlobalStyle`
  :root {
    --color-black: #333333;
    --color-white: #FFFFFF;
    --color-gray: #999999;
    --color-gray-light: #DDDDDD;
    --color-gray-link: #444444;
    --color-yellow-link: #F7CA6C;
    --color-red: red;
  }
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    background-color: var(--color-white);
    color: var(--color-black);
    font-family: 'Open Sans', sans-serif;
    font-size: 1.8rem;
    line-height: 1.6;
    margin: 0;
    min-height: 100vh;
    padding: 0;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Raleway', sans-serif;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 2rem;
    margin-top: 0;
  }
  p {
    margin-bottom: 2rem;
    margin-top: 0;
  }
  a {
    color: var(--color-gray-link);
    text-decoration: none;
  }
  a:not([class]) {
    box-shadow: inset 0 -0.9rem 0 0 var(--color-yellow-link);
    font-weight: 600;
    transition: box-shadow 150ms ease-out;
  }
`;

const Layout = styled.div`
  margin: 0 auto;
  max-width: 80.8rem;
  padding: 0 2rem;
  text-align: center;
`;

const Main = styled.main`
  padding: 5rem 0;
  @media ${device.tablet} {
    padding: 8rem 0;
  }
`;

export default function Page({ children }) {
  return (
    <React.Fragment>
      <GlobalStyles />
      <Layout>
        <Header />
        <Main>{children}</Main>
        <Footer />
      </Layout>
    </React.Fragment>
  );
}

Page.propTypes = {
  children: PropTypes.any
};
