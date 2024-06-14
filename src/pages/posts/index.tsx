import React, { useEffect, useState } from 'react';

import { Container, Column, Posts } from './styles';
import { api } from '../../services';

import {  } from '../../common';

type PostsProps = {
  id: string;
  admin_id: string;
  name: string;
  description: string;
  url: string;
  preview: string;
  width: number;
  height: number;
  duration: number;
  type: string;
  public: string;
  created_at: string;
  comments: [],
  tags: string[],
  _count: {
    feedbacks: number;
    comments: number;
  },
};

export default function posts() {
  const [data, setData] = useState([] as PostsProps[]);

  useEffect(() => {
    (async() => {
      const { data } = await api.get('/posts');

      setData(data);
    })()
  }, []);

  return (
    <Container>
      {Array.from({ length: 6 }).map((_, index) => (
        <Column>
          <Posts>
            <img src={data[index]?.preview} alt={data[index]?.name} />
            <div>
              <p>{data[index]?.name}</p>
            </div>
          </Posts>

          {data.map((item, i) => i >= 6 && (
            <Posts>
              <img src={item?.preview} alt={item?.name} />
              <div>
                <p>{item?.name}</p>
              </div>
            </Posts>
          ))}
        </Column>
      ))}
    </Container>
  )
}

