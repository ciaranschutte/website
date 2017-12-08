import React from 'react';
import { css } from 'react-emotion';
import { container } from 'common/layout';
import ProductItem from './ProductItem';

const styles = {
  header: css`
    display: flex;
    justify-content: space-between;
    color: #004773;
    margin-bottom: 24px;
  `,
  heading: css`
    font-size: 40px;
  `,
  image: css`
    height: 60px;
  `,
  body: css`
    font-size: 18px;
    line-height: 1.67;
    color: #004773;
  `,
  learnMore: css`
    font-size: 18px;
    line-height: 1.67;
    color: #47d9bf;
    transition: all 0.5s;
  `,
};

class ContentMobile extends React.Component {
  render() {
    const {
      tabText,
      description,
      cards,
      icon,
      setExpanded,
      expanded,
    } = this.props;

    return (
      <div
        css={`
          ${container}
          padding-top: 40px;
          padding-bottom: 32px;
          border-bottom: solid 2px #f2f3f5;
          &:last-child {
            border-bottom: none;
          }
        `}
        ref={el => (this.el = el)}
      >
        <div css={styles.header}>
          <h1 css={styles.heading}>{tabText}</h1>
          <img alt="" css={styles.image} src={icon} />
        </div>

        {!expanded && <p css={styles.body}>{description}</p>}
        {!expanded && (
          <div
            css={styles.learnMore}
            onClick={() => {
              setExpanded(!expanded);
              setTimeout(() => this.el.scrollIntoView(true));
            }}
          >
            Learn More
          </div>
        )}
        {expanded &&
          cards.map(card => {
            return (
              <ProductItem
                {...card}
                key={card.title}
                css={`
                  margin-bottom: 40px;
                  &:last-child {
                    margin-bottom: 0;
                  }
                `}
              />
            );
          })}
      </div>
    );
  }
}

export default ContentMobile;
