import React from 'react';

import ContentHeader from '../../components/ContentHeader';
import { Container } from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <ContentHeader />
      <h1>COntent</h1>
    </Container>
  )
}

export default Dashboard;