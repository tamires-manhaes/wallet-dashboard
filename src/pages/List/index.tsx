import React from 'react';

import { Container } from './styles';

import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';

const List: React.FC = () => {
  const options = [{ value: 'Tam', label: 'Tamires' }, { value: 'Br', label: 'Brooke' }, { value: 'Lol', label: 'Lola' }];

  return (
    <Container>
      <ContentHeader title="Entradas" lineColor="#E44FCE">
        <SelectInput options={options}/>
      </ContentHeader>
    </Container>
  )
}

export default List;