import styled from 'styled-components';

export const Container = styled.div`
  grid-area: CONTENT;
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};
`;