import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  box-shadow: 1px 1px 5px 1px rgba(200, 200, 200, 0.8);

  width: 100%;
  max-width: 400px;
  height: 50px;

  border-radius: 3px;

  overflow: hidden;

  input {
    flex: 1;

    border: 0;
    outline: 0;

    background: #fff;

    padding: 14px 10px;

    color: #a3a3a3;

    font: inherit;
  }

  button {
    border: 0;
    background-color: transparent;

    height: 50px;
    width: 50px;

    color: #303030;
    cursor: pointer;
  }
`;