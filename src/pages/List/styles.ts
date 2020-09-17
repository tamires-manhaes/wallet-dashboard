import styled from 'styled-components';

export const Container = styled.div`
  
`;

export const Content = styled.ul`

`;

export const Filters = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 30px;

  .tag-filter{
    position: relative;
    font-size: 18px;
    font-weight: 500;
    background: none;
    border: none;
    color: ${props => props.theme.colors.white};

    margin: 0 10px;
    transition: opacity 350ms ease;

    &:hover {
      opacity: .8;
    }

    &-recurrent::after {
      content: '';
      display: block;
      width: 55px;
      margin: 0 auto;
      border-bottom: 10px solid ${props => props.theme.colors.warning};
    }

    &-eventuals::after{
      content: '';
      display: block;
      width: 55px;
      margin: 0 auto;
      border-bottom: 10px solid ${props => props.theme.colors.success};
    }
  }
`;