import React from 'react';
import styled from 'styled-components';
const StyledSvg = styled.svg`
  width: 7%;
  height: 7%;
  fill: #fff;
  margin: 0 1rem;
`;

const ArrowRight = () => {
  return (
    <StyledSvg viewBox="0 0 580 580" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 328v-79h400L260 107l60-58 251 240-251 242-61-59 148-144z" />
    </StyledSvg>
  );
};

export default ArrowRight;
