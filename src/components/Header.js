import React from 'react';
import styled, { css } from 'react-emotion';
import Link from 'gatsby-link';

import { phone } from 'common/dimensions';

import GetStartedButton from './GetStartedButton';

const HeaderStyled = styled('div')`
  background: #fff;
  padding: 20px 22px;
  display: flex;
  flex-direction: row;
  align-items: center;
  box-shadow: 2px 2px 10px 0 rgba(0, 0, 0, 0.2);
  @media (max-width: ${phone}px) {
    padding: 7px 8px;
  }
`;

const LogoStyled = styled('img')`
  width: 40px;
  height: auto;
  display: block;
  @media (max-width: ${phone}px) {
    width: 46px;
    padding: 2px 6px;
  }
`;

const AboutUsStyled = styled('a')`
  display: inline-flex;
  padding: 13px 30px;
  border-radius: 5px;
  font-size: 18px;
  font-weight: 400;
  text-decoration: none;
  color: #004773;
  &:hover {
    text-decoration: underline;
  }
  @media (max-width: ${phone}px) {
    display: none;
  }
`;

export default ({ aboutUs }) => (
  <HeaderStyled>
    <Link
      to="/"
      className={css`
        margin-right: auto;
      `}
    >
      <LogoStyled src={require('assets/logo-small.png')} />
    </Link>
    {aboutUs && <AboutUsStyled href="#about-us">About Us</AboutUsStyled>}
    <GetStartedButton />
  </HeaderStyled>
);
