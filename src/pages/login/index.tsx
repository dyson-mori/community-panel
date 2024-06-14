import React from 'react';

import { Container, Content } from './styles';
import { Button, Input } from '../../common';
import { api } from '../../services';

const IMAGE_URL = 'https://i.pinimg.com/564x/eb/86/ee/eb86eeb1b610ec66c79776adfec113a1.jpg';

export default function Home() {
  const handleSignIn = async (evt: React.SyntheticEvent) => {
    evt.preventDefault()

    const target = evt.target as typeof evt.target & {
      name: { value: string };
      password: { value: string };
    };

    const { status } = await api.post('/admin-login', {
      username: target.name.value,
      password: target.password.value
    });

    if(status === 404) {
      return console.log('error');
    };

    return window.location.href = '/upload';
  };

  return (
    <Container>
      <Content onSubmit={handleSignIn}>
        <img src={IMAGE_URL} width={200} height={200} style={{ borderRadius: 150 }} />
        <span style={{ height: 20 }} />
        <Input type='text' name='name' placeholder='username' />
        <span style={{ height: 10 }} />
        <Input type='password' name='password' placeholder='password' />
        <span style={{ height: 20 }} />
        <Button type='submit' loading={false}>Signin</Button>
      </Content>
    </Container>
  )
};
