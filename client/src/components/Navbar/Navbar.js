import {
  Nav,
  NavContainer,
  NavLogo,
  NavIcon,
  NavLinks,
  NavItem,
} from './Navbar.style';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavContainer>
          <NavLogo to="/">
            <NavIcon />
            YALOVI
          </NavLogo>
          <NavLinks>
            <NavItem to="/movies">Peliculas</NavItem>
            <NavItem to="/series">Series</NavItem>
          </NavLinks>
        </NavContainer>
      </Nav>
    </>
  );
};

export default Navbar;
