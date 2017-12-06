import React from 'react';
import Link from 'gatsby-link';
import styled, { css } from 'react-emotion';

import { containerMaxWidth } from 'common/dimensions';
import { container, slimContainer } from 'common/layout';
import colors from 'common/colors';
import Header from 'components/Header';
import KeyPoint from 'components/product/KeyPoint';
import SecondaryPoint from 'components/product/SecondaryPoint';

const Song = () => (
  <React.Fragment>
    <Header />
    <div
      className={css`
        background-image: url(${require('assets/product-splash-bg.svg')});
        background-size: 100% auto;
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
    <div
      className={
        `key-points ` +
        css`
          ${container};
          display: flex;
          margin-top: 150px;
          margin-bottom: 150px;
          .key-point {
            flex-basis: calc(100% / 3);
          }
        `
      }
    >
      <KeyPoint
        iconSrc={require('assets/icons/bars.svg')}
        title={`Scalable`}
        body={`Designed to handle the volume of your requests in an efficient and timely manner.`}
      />

      <KeyPoint
        iconSrc={require('assets/icons/download.svg')}
        title={`Easy to adopt`}
        body={`Relying on a standard REST API. Get started running SONG with  two Docker commands.`}
      />

      <KeyPoint
        iconSrc={require('assets/icons/checkmark.svg')}
        title={`Accurate and Efficient`}
        body={`Specifically designed to track genome data, SONG tracks and validates your submissions.`}
      />
    </div>
    <div className={`secondary-points ` + css``}>
      <div
        className={css`
          display: flex;
          flex-wrap: wrap;
          .secondary-point {
            flex-basis: 50%;
            background-color: ${colors.greyLighter};
            margin-top: 2px;
            padding-top: 74px;
            padding-bottom: 74px;
            display: flex;
            &:nth-child(2n - 1) {
              justify-content: flex-end;
              .secondary-point__wrapper {
                width: ${containerMaxWidth / 2 - 42}px;
              }
            }
            &:nth-child(2n) {
              padding-left: 100px;
              border-left: 2px solid #fff;
            }
          }
          .secondary-point__body {
            max-width: 22em;
          }
        `}
      >
        <SecondaryPoint
          title={`It's fast`}
          body={`Allows asynchronous uploads, so that invalid uploads don't stop valid ones from going through. Processes submissions with billions of entities in __ hours. `}
        />
        <SecondaryPoint
          title={`Turn-key solution`}
          body={`Uses industry standard technologies, like JSON, YAML, and REST, so you don't have to learn anything new or difficult to use SONG.`}
        />
        <SecondaryPoint
          title={`Tracks and validate`}
          body={`Automatically validates your metadata submissions against a JSON schema to ensure that all your metadata is correct before it gets published.`}
        />
        <SecondaryPoint
          title={`Connected metadata`}
          body={`Supports ACLs out of the box, so you control who and how your metadata gets published.  Easy to keep track of  which researcher updated which data set, and when.`}
        />
      </div>
    </div>
  </React.Fragment>
);

export default Song;
