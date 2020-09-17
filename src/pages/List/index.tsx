import React from 'react';

import { Container, Content, Filters } from './styles';

import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import HistoryCard from '../../components/HistoryFinanceCard';

const List: React.FC = () => {
  const months = [
    { value: 0, label: 'Mês' }, 
    { value: 3, label: 'Março' }, 
    { value: 4, label: 'Abril' }, 
    { value: 5, label: 'Maio' },
    { value: 6, label: 'Junho' },
    { value: 7, label: 'Julho' },
    { value: 8, label: 'Agosto' },
    { value: 9, label: 'Setembro' },
    { value: 10, label: 'Outubro' },
    { value: 11, label: 'Novembro' },
    { value: 12, label: 'Dezembro' },
  ];

  const years = [
    { value: 0, label: 'Ano' }, 
    { value: 2016, label: '2016' },
    { value: 2017, label: '2017' },
    { value: 2018, label: '2018' },
    { value: 2019, label: '2019' },
    { value: 2020, label: '2020' },
  ]

  return (
    <Container>
      <ContentHeader title="Entradas" lineColor="#E44FCE">
        <SelectInput options={months}/>
        <SelectInput options={years}/>
      </ContentHeader>

      <Filters>
        <button type="button" className="tag-filter tag-filter-eventuals">Eventuais</button>
        <button type="button" className="tag-filter tag-filter-recurrent">Recorrentes</button>
      </Filters>

      <Content>
        <HistoryCard tagColor="#F7931B" title="Running shoes" subtitle="15/09/2020" amount="$500"/>
        <HistoryCard tagColor="#E44FCE" title="Running shoes" subtitle="15/09/2020" amount="$500"/>
        <HistoryCard tagColor="#E44C4E" title="Running shoes" subtitle="15/09/2020" amount="$500"/>
        <HistoryCard tagColor="#F7931B" title="Running shoes" subtitle="15/09/2020" amount="$500"/>
        <HistoryCard tagColor="#E44C4E" title="Running shoes" subtitle="15/09/2020" amount="$500"/>
        <HistoryCard tagColor="#E44FCE" title="Running shoes" subtitle="15/09/2020" amount="$500"/>
        <HistoryCard tagColor="#F7931B" title="Running shoes" subtitle="15/09/2020" amount="$500"/>
        <HistoryCard tagColor="#E44FCE" title="Running shoes" subtitle="15/09/2020" amount="$500"/>
        <HistoryCard tagColor="#E44C4E" title="Running shoes" subtitle="15/09/2020" amount="$500"/>
      </Content>
    </Container>
  )
}

export default List;