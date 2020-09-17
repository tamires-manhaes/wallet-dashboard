import React from 'react';
import { Container, Tag } from './styles';

import { parseStringAsArray } from '../../utils/utils';

interface IHistoryFinanceCardProps {
  tagColor: string,
  title: string,
  subtitle: string,
  amount: string
}

const HistoryFinanceCard: React.FC<IHistoryFinanceCardProps> = ({ tagColor, title, subtitle ,amount }) => {
  const date = parseStringAsArray(subtitle);

  return(
    <Container>
      <Tag color={tagColor}/>
      <div>
        <span>{title}</span>
        <small>{date}</small>
      </div>
      <h3>R${amount}</h3>
    </Container>
  )
}

export default HistoryFinanceCard;