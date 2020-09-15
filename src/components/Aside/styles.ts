import styled from 'styled-components';

export const Container = styled.div`
  grid-area: ASIDE;
  background: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.white}
`;