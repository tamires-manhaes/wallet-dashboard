import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  
  > select {
    min-width: 110px;
    padding: 5px 10px;
    border-radius: 5px;
    border: 1px solid ${props => props.theme.colors.grey};
    background: ${props => props.theme.colors.white};

    margin-left: 5px;
  }
`;
