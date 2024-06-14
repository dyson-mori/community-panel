import styled from "styled-components";

export const Container = styled.article`
  display: flex;

  justify-content: center;
  align-items: center;

  height: 100vh;

  background: rgb(14,0,255);
  background: linear-gradient(330deg, #6f085a 0%, #c51c53 100%);
`;

export const Content = styled.form`
  display: flex;
  position: relative;

  align-items: center;
  flex-direction: column;
  justify-content: center;

  width: 50%;
  max-width: 400px;
  padding: 20px;

  border-radius: 6px;

  background-color: #ffffff;
`;