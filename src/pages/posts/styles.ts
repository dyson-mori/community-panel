import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  /* flex-wrap: wrap; */
  justify-content: center;
  /* align-items: center; */
  flex-direction: row;

  height: 100vh;

  background: rgb(14,0,255);
  background: linear-gradient(330deg, #6f085a 0%, #c51c53 100%);
`;

export const Posts = styled.div`
  position: relative;
  margin: 5px;
  
  display: flex;
  align-items: center;

  img {
    border-radius: 3px;

    width: 100%;
  };

  div {
    position: absolute;

    display: flex;
    justify-content: center;

    width: 100%;
    height: 30px;

    background-color: #0000002a;
  };
`;

export const Column = styled.div`
  width: 100%;

  /* border: 1px dashed #000; */
`;