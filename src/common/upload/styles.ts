import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;

  label {
    display: flex;

    justify-content: center;
    align-items: center;

    width: 400px;
    height: 400px;

    /* border: 1px dashed #303030; */
    color: #303030;
    border-radius: 6px;

    margin: 10px;
    cursor: pointer;

    box-shadow: 1px 1px 5px 1px rgba(200, 200, 200, 0.5);
  }

  /* label:hover {
    border: 1px dashed #a6a6a6;
  } */

  input[type="file"] {
    display: none;
  }

  video {
    width: 400px;
    height: 400px;

    border-radius: 6px;

    object-fit: cover;
    margin: 10px;
  }
`;