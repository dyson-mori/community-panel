import React from "react";

import { Container } from "./styles";

type Props = {
  visible: boolean;
}

export const Loading: React.FC<Props> = ({ visible }) => {
  return visible && (
    <Container color="#303030">
      <span className="loader" />
    </Container>
  )
};
