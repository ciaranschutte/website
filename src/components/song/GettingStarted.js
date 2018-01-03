import React from 'react';
import { css } from 'react-emotion';

import { container } from 'common/layout';
import GetStartedButton from 'components/GetStartedButton';
import { products } from 'common/products';
import Terminal from '../Terminal';
const Line = () => (
  <div
    css={`
      margin: 45px 0;
      width: 105px;
      height: 3px;
      background: #f2d03a;
    `}
  />
);

const styled = {
  container: css`
    color: #004773;
    ${container};
  `,
  stepNumber: css`
    font-size: 30px;
    font-weight: bold;
    line-height: 1.23;
    color: #003055;
    margin-bottom: 27px;
  `,
  stepText: css`
    width: 281px;
    font-size: 24px;
    line-height: 1.67;
    color: #003055;
    flex: none;
  `,
  header: css`
    margin: 120px 0 51px;
    font-size: 30px;
    font-weight: 300;
    text-align: center;
  `,
};

const Step = ({ num, text, right, align }) => {
  return (
    <React.Fragment>
      <div>
        <div css={styled.stepNumber}>{num}</div>
        <div
          css={`
              display: flex;
              justify-content: space-between;
              align-items: ${align};
            `}
        >
          <div css={styled.stepText}>{text}</div>
          {right}
        </div>
      </div>
      <Line />
    </React.Fragment>
  );
};

const GettingStarted = () => {
  return (
    <div css={styled.container}>
      <h1 css={styled.header}>Getting started</h1>
      <Step
        num={1}
        text="Download the SONG client - SING, our command line interface."
        right={<GetStartedButton to={products.song.getStarted} />}
        align="flex-end"
      />
      <Step
        num={2}
        text="Build and run the source using maven with simple instructions."
        right={
          <Terminal css={`margin-top: -28px; max-width: 600px;`}>
            <pre>
              <span>
                <span className="cm-variable no-copy">$ </span>
                <span className="cm-variable">git</span>{' '}
                <span className="cm-variable">clone</span>{' '}
                <span className="cm-variable">git</span>
                <span className="cm-operator">@</span>
                <span className="cm-variable">
                  github
                </span>.<span className="cm-property">com</span>:<span className="cm-variable">
                  icgc
                </span>
                <span className="cm-operator">-</span>
                <span className="cm-variable">dcc</span>
                <span className="cm-operator">/</span>
                <span className="cm-variable">
                  SONG
                </span>.<span className="cm-property">git</span>
              </span>
            </pre>
            <pre>
              <span>
                <span className="cm-variable no-copy">$ </span>
                <span className="cm-variable">cd</span>{' '}
                <span className="cm-variable">SONG</span>
                <span className="cm-operator">/</span>
                <span className="cm-variable">song</span>
                <span className="cm-operator">-</span>
                <span className="cm-variable">server</span>
              </span>
            </pre>
            <pre>
              <span>
                <span className="cm-variable no-copy">$ </span>
                <span className="cm-variable">mvn</span>{' '}
                <span className="cm-variable">spring</span>
                <span className="cm-operator">-</span>
                <span className="cm-variable">
                  boot
                </span>:<span className="cm-variable">run</span>{' '}
                <span className="cm-operator">-</span>
                <span className="cm-variable">
                  Drun
                </span>.<span className="cm-property">profiles</span>
                <span className="cm-operator">=</span>
                <span className="cm-variable">
                  dev
                </span>,<span className="cm-variable">test</span>
              </span>
            </pre>
          </Terminal>
        }
        align="flex-start"
      />
      <Step
        num={3}
        text="get started running SONG with just two Docker commands."
        right={
          <Terminal css={`margin-top: -28px; max-width: 600px;`}>
            <pre>
              <span>
                <span className="cm-variable no-copy">$ </span>
                <span className="cm-variable">docker</span>
                <span className="cm-operator">-</span>
                <span className="cm-variable">compose</span>{' '}
                <span className="cm-variable">build</span>
              </span>
            </pre>
            <pre>
              <span>
                <span className="cm-variable no-copy">$ </span>
                <span className="cm-variable">docker</span>
                <span className="cm-operator">-</span>
                <span className="cm-variable">compose</span>{' '}
                <span className="cm-variable">up</span>
              </span>
            </pre>
          </Terminal>
        }
        align="flex-start"
      />
    </div>
  );
};

export default GettingStarted;
