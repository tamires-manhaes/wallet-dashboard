import React from 'react';
import { MdDashboard, MdArrowDownward, MdArrowUpward, MdExitToApp } from 'react-icons/md';

import { Container, Header, Logo, Title, Menu, MenuItem, MenuLink} from './styles';

import LogoImg from '../../assets/logo.svg';

const Aside: React.FC = () => {
  return(
    <Container>
      <Header>
        <Logo src={LogoImg} alt="Logo Wallet Dashboard"/>
        <Title>Minha Carteira</Title>
      </Header>
      
      <Menu>
        <MenuItem>
          <MenuLink href="#">
            <MdDashboard /> 
            Dashboard
          </MenuLink>
        </MenuItem>

        <MenuItem>
          <MenuLink href="#">
            <MdArrowUpward /> 
            Entradas
          </MenuLink>
        </MenuItem>

        <MenuItem>
          <MenuLink href="#">
            <MdArrowDownward /> 
            Saídas
          </MenuLink>
        </MenuItem>

        <MenuItem>
          <MenuLink href="#">
            <MdExitToApp /> 
            Sair
          </MenuLink>
        </MenuItem>
      </Menu>
    </Container>
  )
}

export default Aside;