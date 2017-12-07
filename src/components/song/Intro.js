import React from 'react';
import { css } from 'react-emotion';
import { container, slimContainer } from 'common/layout';
import colors from 'common/colors';

const Intro = () => {
  return (
    <div
      className={css`
        background-image: url(${require('assets/product-splash-bg.svg')});
        background-size: cover;
        background-position: bottom;
        color: #fff;
      `}
    >
      <div
        className={css`
          font-size: 56px;
          font-weight: 700;
          line-height: 1.25;
          text-align: center;
          padding-top: 80px;
          padding-bottom: 50px;
        `}
      >
        Song
      </div>
      <p
        className={css`
          font-size: 30px;
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
          font-size: 24px;
          color: ${colors.blueDark};
          line-height: 1.88;
          flex-shrink: 1;
          transform: translateY(40px);
        `}
      >
        <p
          className={css`
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
            padding-left: 24px;
            padding-right: 24px;
            flex-grow: 1;
            display: flex;
            justify-content: center;
            border-top-right-radius: 5px;
            border-bottom-right-radius: 5px;
          `}
        >
          <img
            className={css`
              margin-top: -40px;
              margin-bottom: -50px;
            `}
            src={require('assets/product-splash-fg.svg')}
          />
        </div>
      </div>
    </div>
  );
};
export default Intro;
