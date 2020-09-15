import styled from 'styled-components';

export const Container = styled.div`
  grid-area: MAINHEADER;
  background: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.white};

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 15px;
  border-bottom: 1px solid ${props => props.theme.colors.white};
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Welcome = styled.h3`
  display: flex;
`;

export const Username = styled.span``;