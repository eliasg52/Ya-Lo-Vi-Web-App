import styled from 'styled-components';
import { Container } from '../../GlobalStyles.style';
import { GiSpiderMask } from 'react-icons/gi';
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
  background-color: #373b69;
  height: 80px;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
  font-size: 1.2rem;
`;

export const NavContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;

  ${Container}
`;

export const NavLogo = styled(Link)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;

  &:hover {
    border-bottom: 2px solid #fff;
  }
`;

export const NavIcon = styled(GiSpiderMask)`
  margin-right: 0.5rem;
  font-size: 2.5rem;
`;

export const NavLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  gap: 1.5rem;
`;

export const NavItem = styled(Link)`
  color: #fff;

  &:hover {
    border-bottom: 2px solid #fff;
  }
`;
