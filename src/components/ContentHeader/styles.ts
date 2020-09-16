import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  margin-bottom: 25px;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

export const TitleContainer = styled.div`
  > h1 {
    color: ${props => props.theme.colors.white};

    &::after{
      content: '';
      display: block;
      width: 50%;
      height: 5px;
      background: ${props => props.theme.colors.warning};
    }
  }
`;

export const Controllers = styled.div`
  display: flex;
  
  > select {
    width: 100px;
    height: 30px;
    border-radius: 5px;
    border: none;
    margin: 0 5px;
    background: ${props => props.theme.colors.white};
    cursor: pointer;
  }
`;
