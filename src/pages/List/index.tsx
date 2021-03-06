import React, { useMemo, useState, useEffect } from 'react';

import { Container, Content, Filters } from './styles';

import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import HistoryCard from '../../components/HistoryFinanceCard';

import gains from '../../data/gains';
import expenses from '../../data/expenses';

interface IRouteParams {
  match: {
    params: {
      type: string
    }
  }
}

interface IData {
  description: string,
  amount: string ,
  frequency: string,
  date: string,
  tagColor: string
}

const List: React.FC<IRouteParams> = ({ match }) => {
  const [data, setData] = useState<IData[]>([]);
  const [monthSelected, setMonthSelected] = useState<string>(String( new Date().getMonth() + 1 ));
  const [yearSelected, setYearSelected] = useState<string>(String( new Date().getFullYear() ));

  const { type } = match.params;
  
  const option = useMemo(() => {
    return type === 'entries' ? { title: 'Entradas', lineColor: '#F7931B' } : { title: 'Saídas', lineColor: '#E44C4E' };
  },[type]);

  const listData = useMemo(() => {
    return type === 'entries' ? gains : expenses;
  },[type]);

  const months = [
    { value: 0, label: 'Mês' }, 
    { value: 1, label: 'Janeiro' }, 
    { value: 2, label: 'Fevereiro' }, 
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
  ];

  useEffect(() => {
    const filteredDate = listData.filter(item => {
      const date = new Date(item.date);
      const month = String(date.getMonth() + 1);
      const year = String(date.getFullYear());
      
      return monthSelected === month && yearSelected === year;
    });

    const response = filteredDate.map(item => {
      return {
        description : item.description,
        amount: item.amount,
        frequency: item.frequency,
        date: item.date,
        tagColor: item.frequency === 'recorrente' ? '#4E41F0' : '#E44C4E'
      }
    });
    setData(response);
  },[listData, monthSelected, yearSelected]);

  return (
    <Container>
      <ContentHeader title={option.title} lineColor={option.lineColor}>
        <SelectInput options={months} onChange={(e) => setMonthSelected(e.target.value)} defaultValue={monthSelected}/>
        <SelectInput options={years} onChange={(e) => setYearSelected(e.target.value)} defaultValue={yearSelected}/>
      </ContentHeader>

      <Filters>
        <button type="button" className="tag-filter tag-filter-eventuals">Eventuais</button>
        <button type="button" className="tag-filter tag-filter-recurrent">Recorrentes</button>
      </Filters>

      <Content>
        {  
          data.map((item, index) => (
            <HistoryCard key={index} tagColor={item.tagColor} title={item.description} subtitle={item.date} amount={item.amount}/> 
          ))

        }
      </Content>
    </Container>
  )
}

export default List;