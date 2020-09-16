import React from 'react';

import { Container, TitleContainer, Controllers } from './styles';

interface IContentHeaderProps {
  title: string,
  lineColor: string,
}

const ContentHeader: React.FC<IContentHeaderProps> = ({ title, lineColor, children }) => {
  // const options = [{ value: 'Tam', label: 'Tamires' }, { value: 'Br', label: 'Brooke' }, { value: 'Lol', label: 'Lola' }];

  return (
    <Container >
      <TitleContainer lineColor={lineColor}>
        <h1>{title}</h1>
      </TitleContainer>

      <Controllers>
        { children }
      </Controllers>

    </Container>
  )
}

export default ContentHeader;