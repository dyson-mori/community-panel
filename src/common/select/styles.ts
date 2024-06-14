import styled, { css } from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;

  flex-direction: column;

  width: 400px;
  /* height: 50px; */

  background: #fff;

  color: #a3a3a3;
  box-shadow: 0 6px 10px 0 rgba(255, 255, 255, 0.2);
`;

export const Drop = styled.div`
  position: absolute;
  top: 55px;

  display: flex;
  flex-flow: wrap;

  height: 140px;

  overflow-y: hidden;
`;