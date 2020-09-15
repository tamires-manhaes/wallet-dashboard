import styled from 'styled-components';

export const Container = styled.div`
  grid-area: ASIDE;
  background: ${props => props.theme.colors.secondary};
  padding: 15px;
  color: ${props => props.theme.colors.white};

  border-right: 1px solid ${props => props.theme.colors.white};
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
`;  

export const Title = styled.h2`
  font-size: 20px;
`;  

export const Logo = styled.img`
  margin-right: 15px;
  height: 40px;
  width: 40px;
`;  

export const Menu = styled.ul`
  margin: 20px 0 10px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`; 

export const MenuItem = styled.li`
  list-style: none;
  margin: 10px 5px;
`;

export const MenuLink = styled.a`
  text-decoration: none;
  color: ${props => props.theme.colors.info};
  font-weight: bold;
  font-size: 18px;

  display: flex;
  align-items: center;

  transition: opacity 250ms ease;

  &:hover {
    opacity: 0.5;
  }

  > svg {
    margin-right: 5px;
    font-size: 20px;
    color: ${props => props.theme.colors.info};
  }
`;