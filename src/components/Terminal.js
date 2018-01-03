import React from 'react';
import { css } from 'react-emotion';

const styles = {
  container: css`
    padding: 8px;
    border-radius: 3px;
    background-color: #f2f3f5;
    width: 100%;
  `,
  circle: css`
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #d8d8d8;
    margin-right: 10px;
    margin-bottom: 10px;
  `,
  terminal: css`
    bottom: 0px;
    box-sizing: border-box;
    color: rgb(255, 255, 255);
    left: 0px;
    min-width: 90px;
    position: relative;
    right: 0px;
    text-decoration: none solid rgb(255, 255, 255);
    text-rendering: optimizeLegibility;
    top: 0px;
    width: 100%;
    z-index: 1;
    column-rule-color: rgb(255, 255, 255);
    perspective-origin: 211.094px 49px;
    transform-origin: 211.094px 49px;
    caret-color: rgb(255, 255, 255);
    border: 0px none rgb(255, 255, 255);
    border-radius: 5px 5px 5px 5px;
    font: normal normal 400 normal 18px / 24px -apple-system, system-ui,
      'Segoe UI', Roboto, Ubuntu, 'Helvetica Neue', sans-serif;
    outline: rgb(255, 255, 255) none 0px;
    background-color: #282a36 !important;
    color: #f8f8f2 !important;
    padding: 18px;
    & .no-copy {
      user-select: none;
    }

    & pre {
      font-size: 14px;
      font-family: 'Fira Code', monospace;
      background-position: 0px 0px;
      bottom: 0px;
      box-sizing: border-box;
      color: rgb(248, 248, 242);
      cursor: text;
      font-variant: contextual;
      font-variant-ligatures: contextual;
      height: 18px;
      left: 0px;
      line-height: 18.6667px;
      overflow-wrap: break-word;
      position: relative;
      right: 0px;
      text-decoration: none solid rgb(248, 248, 242);
      text-rendering: optimizeLegibility;
      top: 0px;
      white-space: pre-wrap;
      width: 386.203px;
      word-wrap: break-word;
      z-index: 2;
      column-rule-color: rgb(248, 248, 242);
      perspective-origin: 193.094px 9px;
      transform-origin: 193.094px 9px;
      caret-color: rgb(248, 248, 242);
      background: rgba(0, 0, 0, 0) none repeat scroll 0px 0px / auto padding-box
        border-box;
      border: 0px none rgb(248, 248, 242);
      margin: 0px;
      outline: rgb(248, 248, 242) none 0px;
      padding: 0px 4px;
    }

    & pre > span {
      box-sizing: border-box;
      color: rgb(248, 248, 242);
      cursor: text;
      font-variant: contextual;
      font-variant-ligatures: contextual;
      line-height: 18.6667px;
      overflow-wrap: break-word;
      text-decoration: none solid rgb(248, 248, 242);
      text-rendering: optimizeLegibility;
      white-space: pre-wrap;
      word-wrap: break-word;
      column-rule-color: rgb(248, 248, 242);
      caret-color: rgb(248, 248, 242);
      border: 0px none rgb(248, 248, 242);
      outline: rgb(248, 248, 242) none 0px;
      padding: 0px 0.1px 0px 0px;
    }

    & .cm-variable {
      box-sizing: border-box;
      color: rgb(80, 250, 123);
      cursor: text;
      font-variant: contextual;
      font-variant-ligatures: contextual;
      line-height: 18.6667px;
      overflow-wrap: break-word;
      text-decoration: none solid rgb(80, 250, 123);
      text-rendering: optimizeLegibility;
      white-space: pre-wrap;
      word-wrap: break-word;
      column-rule-color: rgb(80, 250, 123);
      caret-color: rgb(80, 250, 123);
      border: 0px none rgb(80, 250, 123);
      outline: rgb(80, 250, 123) none 0px;
    }
    & .cm-operator {
      box-sizing: border-box;
      color: rgb(255, 121, 198);
      cursor: text;
      font-variant: contextual;
      font-variant-ligatures: contextual;
      line-height: 18.6667px;
      overflow-wrap: break-word;
      text-decoration: none solid rgb(255, 121, 198);
      text-rendering: optimizeLegibility;
      white-space: pre-wrap;
      word-wrap: break-word;
      column-rule-color: rgb(255, 121, 198);
      caret-color: rgb(255, 121, 198);
      border: 0px none rgb(255, 121, 198);
      outline: rgb(255, 121, 198) none 0px;
    }
    & .cm-property {
      box-sizing: border-box;
      color: rgb(102, 217, 239);
      cursor: text;
      font-variant: contextual;
      font-variant-ligatures: contextual;
      line-height: 18.6667px;
      overflow-wrap: break-word;
      text-decoration: none solid rgb(102, 217, 239);
      text-rendering: optimizeLegibility;
      white-space: pre-wrap;
      word-wrap: break-word;
      column-rule-color: rgb(102, 217, 239);
      caret-color: rgb(102, 217, 239);
      border: 0px none rgb(102, 217, 239);
      outline: rgb(102, 217, 239) none 0px;
    }
  `,
};
const Terminal = ({ children, className }) => {
  return (
    <div
      className={css`
        ${styles.container};
        ${className};
      `}
    >
      <div style={{ display: 'flex' }}>
        <div className={styles.circle} />
        <div className={styles.circle} />
        <div className={styles.circle} />
      </div>
      <div className={`${styles.terminal}`}>{children}</div>
    </div>
  );
};

export default Terminal;
