import { Typography } from 'antd';
import styled from 'styled-components';

export const ContainerToogle = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: all 0.6s ease-in-out;
  border-radius: 150px 0 0 100px;
  z-index: 1000;

  .toogle {
    background-color: #512da8;
    height: 100%;
    background: linear-gradient(to right, #512da8, #5c6bc0);
    color: #fff;
    position: relative;
    left: -100%;
    height: 100%;
    width: 200%;
    transform: translateX(0);
    transition: all 0.6s ease-in-out;
  }

  &.active {
    transform: translateX(-100%);
    border-radius: 0 150px 100px 0;
  }
  &.active .toogle {
    transform: translateX(50%);
  }
`;
