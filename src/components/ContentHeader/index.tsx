import React from 'react';
import Content from '../Content';

import { Container, TitleContainer, Controllers } from './styles';

const ContentHeader: React.FC = () => {
  return (
    <Container>
      <TitleContainer>
        <h1>Titulo</h1>
      </TitleContainer>

      <Controllers>
        <select>
          <option value="teste">teste</option>
          <option value="teste">teste</option>
          <option value="teste">teste</option>
        </select>

        <select>
          <option value="teste">teste</option>
          <option value="teste">teste</option>
          <option value="teste">teste</option>
        </select>
      </Controllers>
      
    </Container>
  )
}

export default ContentHeader;