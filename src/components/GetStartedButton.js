import React from 'react';
import ButtonPrimaryStyled from './ButtonPrimaryStyled';

export default props => {
  return (
    <ButtonPrimaryStyled
      onClick={() => window.open('https://github.com/overture-stack')}
      {...props}
    >
      Get Started
    </ButtonPrimaryStyled>
  );
};
