import React from 'react';
import { useParams } from 'react-router-dom';

// import { Container } from './styles';

type ParamsProps = {
  postId: string;
};

export default function Edit() {
  const params = useParams<ParamsProps>();
  console.log(params);

  return <div />;
}