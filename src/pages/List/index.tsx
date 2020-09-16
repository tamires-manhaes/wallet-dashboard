import React from 'react';

import { Container, Content } from './styles';

import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import HistoryCard from '../../components/HistoryFinanceCard';

const List: React.FC = () => {
  const options = [{ value: 'Tam', label: 'Tamires' }, { value: 'Br', label: 'Brooke' }, { value: 'Lol', label: 'Lola' }];

  return (
    <Container>
      <ContentHeader title="Entradas" lineColor="#E44FCE">
        <SelectInput options={options}/>
      </ContentHeader>

      <Content>
        <HistoryCard  cardColor="#313862" tagColor="#F7931B" title="Running shoes" subtitle="15/09/2020" amount="$500"/>
        <HistoryCard  cardColor="#313862" tagColor="#E44FCE" title="Running shoes" subtitle="15/09/2020" amount="$500"/>
        <HistoryCard  cardColor="#313862" tagColor="#E44C4E" title="Running shoes" subtitle="15/09/2020" amount="$500"/>
        <HistoryCard  cardColor="#313862" tagColor="#F7931B" title="Running shoes" subtitle="15/09/2020" amount="$500"/>
        <HistoryCard  cardColor="#313862" tagColor="#E44C4E" title="Running shoes" subtitle="15/09/2020" amount="$500"/>
        <HistoryCard  cardColor="#313862" tagColor="#E44FCE" title="Running shoes" subtitle="15/09/2020" amount="$500"/>
        <HistoryCard  cardColor="#313862" tagColor="#F7931B" title="Running shoes" subtitle="15/09/2020" amount="$500"/>
        <HistoryCard  cardColor="#313862" tagColor="#E44FCE" title="Running shoes" subtitle="15/09/2020" amount="$500"/>
        <HistoryCard  cardColor="#313862" tagColor="#E44C4E" title="Running shoes" subtitle="15/09/2020" amount="$500"/>
      </Content>
    </Container>
  )
}

export default List;