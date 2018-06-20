import React from 'react';
import Link from 'gatsby-link';
import { Grid, Button } from 'material-ui';

import styled from '../../utils/styled';

const MenuWrapper = styled(Grid, {
  component: 'div',
  container: true,
  spacing: 8,
  direction: 'column',
  alignItems: 'flex-start',
  justify: 'flex-start',
})(theme => ({
  background: theme.palette.background.default,
}));
const MenuContent = styled(Grid)(theme => ({
  textAlign: 'center',
}));
const Navigation = styled('nav')(theme => ({
  padding: `${theme.spacing.unit * 2}px 0`,
}));
const Title = styled('h1')(theme => ({
  margin: 0,
}));
const NavLink = styled(Button, { component: Link })(theme => ({
  color: 'gray',
}));

const Menu = ({ data: { site } }) => (
  <MenuWrapper>
    <MenuContent item xs={1}>
      <Navigation>
        <NavLink to="/">Empresas</NavLink>
        <NavLink to="/services">Solicitudes</NavLink>
        <NavLink to="/blog">Noticias</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </Navigation>
    </MenuContent>
  </MenuWrapper>
);

export default Menu;
