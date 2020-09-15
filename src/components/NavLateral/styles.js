import styled from 'styled-components';

export const NavBarLateral = styled.nav`
  height: 100vh;
  width: 189px;
  float: left;
  background: var(--navbar);
`;

export const Quadrado = styled.div`
  height: 108px;
  background: rgba(0, 0, 0, 0.2);
  margin-bottom: 32px;
  display: flex;
`;

Quadrado.a = styled.a`
  display: contents;
`;

export const LogoImg = styled.img`
  width: 83px;
  margin: auto;
`;
