import styled from 'react-emotion';
import { phone } from 'common/dimensions';

export default styled('button')`
  display: inline-flex;
  padding: 13px 30px;
  border-radius: 5px;
  font-size: 18px;
  font-weight: 400;
  border: none;
  cursor: ${props => props.onClick && 'pointer'};
  @media (max-width: ${phone}px) {
    padding: 7px 25px;
  }
`;
