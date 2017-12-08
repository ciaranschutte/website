import { css } from 'react-emotion';
import { medium, containerMaxWidth } from 'common/dimensions';
import { phone } from './dimensions';

export const container = css`
  max-width: ${containerMaxWidth}px;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: ${medium}px) {
    max-width: calc(100% - 60px);
  }
  @media (max-width: ${phone}px) {
    max-width: calc(100% - 40px);
  }
`;
