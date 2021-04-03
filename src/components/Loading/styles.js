import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
from {
  transform: rotate(0deg);
}
to {
  transform: rotate(360deg);
}
`;

export const Rotate = styled.div`
  display: inline-block;
  margin-top: 10rem;
  animation: ${rotate} 2s linear infinite;

`;

export const Image = styled.img`
  width: 15vw;
  max-width: 150px;
`;