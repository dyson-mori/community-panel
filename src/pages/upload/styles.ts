import styled, { css } from "styled-components";

export const Container = styled.main`
  display: flex;

  justify-content: center;
  align-items: center;

  height: 100vh;

  background: rgb(14,0,255);
  background: linear-gradient(330deg, #6f085a 0%, #c51c53 100%);

  #posts {
    position: absolute;
    bottom: 10px;
    /* right: 10px; */
  }
`;


export const Upload = styled.div`
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

  video {
    width: 400px;
    height: 600px;

    border-radius: 6px;

    object-fit: cover;
    margin: 10px;
  }
`;

export const Content = styled.form`
  display: flex;
  position: relative;

  justify-content: center;

  width: 85%;
  height: 80vh;

  border-radius: 6px;

  background-color: #ffffff;

  /* filter: blur(2); */

  #upload {
    position: absolute;
    bottom: 10px;
    width: 200px;
    max-height: 40px;
  }
`;

export const Left = styled.section`
  display: flex;

  align-items: center;
  flex-direction: column;
  justify-content: center;

  width: 40%;
`;

export const Right = styled.section`
  display: flex;
  
  align-items: center;
  flex-direction: column;
  justify-content: center;

  width: 50%;
`;

export const TagsSelected = styled.div`
  display: flex;
  flex-flow: wrap;

  width: 400px;
  height: 100px;

  border: 1px dashed #000;
  border-radius: 6px;

  overflow-y: hidden;

  p {
    color: #000;
    text-align: center;
  }
`;
