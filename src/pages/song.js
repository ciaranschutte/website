import React from 'react';
import Link from 'gatsby-link';
import styled, { css } from 'react-emotion';

import { container, slimContainer } from 'common/layout';
import { large, medium, small } from 'common/dimensions';
import { pxToEmByFontBasis } from 'common/utils';
import colors from 'common/colors';
import Header from 'components/Header';

const fontBasis = 56;
const pxToEm = px => pxToEmByFontBasis(px, fontBasis);

const Song = () => (
  <React.Fragment>
    <Header />
    <div
      className={css`
        background-image: url(${require('assets/product-splash-bg.svg')});
        background-size: 100% auto;
        color: #fff;
        font-size: ${fontBasis}px;
        @media (max-width: ${large}px) {
          font-size: 30px;
        }
      `}
    >
      <div
        className={css`
          font-size: 1em;
          font-weight: 700;
          line-height: 1.25;
          text-align: center;
          padding-top: ${pxToEm(80)};
          padding-bottom: ${pxToEm(50)};
        `}
      >
        Song
      </div>
      <p
        className={css`
          font-size: 0.53em;
          font-weight: 300;
          line-height: 1.23;
          text-align: center;
          max-width: 22em;
          margin-left: auto;
          margin-right: auto;
        `}
      >
        Quickly and reliably track genome data scattered across multiple Cloud
        storage systems.
      </p>
      <div
        className={css`
          ${container};
          border-radius: 5px;
          background-color: #ffffff;
          box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.15);
          display: flex;
          font-size: ${pxToEm(24)};
          color: ${colors.blueDark};
          line-height: 1.88;
          flex-shrink: 1;
          transform: translateY(40px);
        `}
      >
        <p
          className={css`
            margin: ${pxToEm(48)} ${pxToEm(40)};
            margin: 48px 40px;
            max-width: 25em;
          `}
        >
          SONG is an open source system for validating and tracking metadata
          about raw data submissions, assigning identifiers to entities of
          interest, and managing the state of the raw data with regards to
          publication and access.
        </p>
        <div
          className={css`
            background-color: ${colors.bgGrey};
            padding-left: ${pxToEm(24)};
            padding-right: ${pxToEm(24)};
            flex-grow: 1;
            display: flex;
            justify-content: center;
            border-top-right-radius: 5px;
            border-bottom-right-radius: 5px;
          `}
        >
          <img
            className={css`
              margin-top: ${pxToEm(-40)};
              margin-bottom: ${pxToEm(-50)};
              margin-top: -40px;
              margin-bottom: -50px;
            `}
            src={require('assets/product-splash-fg.svg')}
          />
        </div>
      </div>
    </div>
  </React.Fragment>
);

export default Song;
