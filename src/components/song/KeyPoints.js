import React from 'react';
import { css } from 'react-emotion';

import KeyPoint from 'components/product/KeyPoint';
import { container } from 'common/layout';

const KeyPoints = () => {
  return (
    <div
      className={
        `key-points ` +
        css`
          ${container};
          display: flex;
          margin-top: 150px;
          margin-bottom: 150px;
          flex-wrap: wrap;
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
  );
};
export default KeyPoints;
