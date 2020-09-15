import React, { useMemo } from 'react';

import { Container, Profile, Welcome, Username } from './styles';

import emojis from '../../utils/emojis';

const MainHeader: React.FC = () => {
  const emoji = useMemo(() => {
    const indice = Math.floor(Math.random() * emojis.length );
    return emojis[indice];
  }, []);

  return(
    <Container>
      <h1>MainHeader</h1>

      <Profile>
        <Welcome>Olar!{' '} {emoji}</Welcome>
        <Username>Tamires Lynda</Username>
      </Profile>
    </Container>
  )
}

export default MainHeader;