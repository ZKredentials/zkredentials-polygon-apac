import styled, { keyframes } from "styled-components";

const LoadingRing = keyframes`
  0% {
      transform: rotate(0deg);
  }
  100% {
      transform: rotate(360deg);
  }
`;

export const LoaderContainer = styled.div<{ color: string }>`
  position: relative;
  display: inline-block;
  width: 80px;
  height: 80px;

  & div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 64px;
    height: 64px;
    margin: 8px;
    border: 8px solid #ffffff;
    border-radius: 50%;
    animation: ${LoadingRing} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: ${({ color }) =>
      color ? color : ""} transparent transparent transparent;
    transform: translate(-50%, -50%);

    &:nth-child(1) {
      animation-delay: -0.45s;
    }

    &:nth-child(2) {
      animation-delay: -0.3s;
    }
    
    &:nth-child(3) {
      animation-delay: -0.15s;
    }
  }
}
`;
