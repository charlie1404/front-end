import { css } from 'emotion';
import React from 'react';
import { keyframes } from 'react-emotion';

const loaderWrapper = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000
`;
const spin = keyframes`
  0%   {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;
const spinRev = keyframes`
  0%   {
    transform: rotate(360deg);
  }
  100% {
    transform: rotate(0deg);
  }
`;
const loaderClass = css`
  display: block;
  position: relative;
  left: 50%;
  top: 50%;
  width: 250px;
  height: 250px;
  margin: -125px 0 0 -125px;
  border-radius: 50%;
  border: 4px solid transparent;
  border-top-color: #3498db;
  border-bottom-color: #3498db;
  animation: ${spin} 3s linear infinite;

  &:before {
    content: "";
    position: absolute;
    top: 5px;
    left: 5px;
    right: 5px;
    bottom: 5px;
    border-radius: 50%;
    border: 4px solid transparent;
    border-top-color: #e74c3c;
    border-bottom-color: #e74c3c;
    animation: ${spinRev} 1.5s linear infinite;
  }

  &:after {
    content: "";
    position: absolute;
    top: 15px;
    left: 15px;
    right: 15px;
    bottom: 15px;
    border-radius: 50%;
    border: 4px solid transparent;
    border-top-color: #f9c922;
    border-bottom-color: #f9c922;
    animation: ${spin} 3s linear infinite;
  }
`;

export default function Loader() {
  return (
    <div className={loaderWrapper}>
      <div className={loaderClass} />
    </div>
  );
}
