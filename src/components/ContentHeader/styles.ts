import styled from 'styled-components';

interface ITitleContainerProps {
  lineColor: string;
}

export const Container = styled.header`
  width: 100%;
  margin-bottom: 25px;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

export const TitleContainer = styled.div<ITitleContainerProps>`
  > h1 {
    color: ${props => props.theme.colors.white};

    &::after{
      content: '';
      display: block;
      width: 50%;
      height: 5px;
      background: ${props => props.lineColor};
    }
  }
`;

export const Controllers = styled.div`
  display: flex;
`;
