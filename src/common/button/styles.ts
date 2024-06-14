import styled, { css } from "styled-components";

import { Button } from ".";

export const Container = styled.button<Omit<Button, 'children'>>`
  margin: 3px 2px;

  flex-grow: 1;

  border-radius: 3px;
  padding: 10px 15px;

  height: 40px;

  border: 1px solid transparent;

  font-weight: 500;
  font-family: inherit;

  transition: border-color 0.25s;

  cursor: pointer;

  ${({ type }) => type === 'upload' && css`
    background: rgb(14,0,255);
    background: linear-gradient(330deg, #FF8A08 0%, #FF6500 100%);
  `};

  ${({ type }) => type === 'click' && css`
    background: rgb(14,0,255);
    background: linear-gradient(330deg, #03AED2 0%, #68D2E8 100%);
  `};

  ${({ selected, isCreator }) => css`
    ${isCreator ? css`
      ${selected ? css`
        background: linear-gradient(330deg, #006769 0%, #151515 100%);
        /* background: linear-gradient(330deg, #EE4E4E 0%, #240750 100%); */
      ` : css`
        background: linear-gradient(330deg, #003285 0%, #2A629A 100%);
      `};
    ` : css`
      background-color: ${selected ? '#1a1a1a' : '#FE2C55'};
    `};
  `};

  :hover {
    border-color: #646cff;
  };

  :focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  };
`;