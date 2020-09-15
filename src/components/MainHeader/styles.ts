import styled from 'styled-components';

export const Container = styled.div`
  grid-area: MAINHEADER;
  background: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.white};
`;