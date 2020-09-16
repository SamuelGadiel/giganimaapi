import styled from 'styled-components';

export const NavBarLateral = styled.nav`
  height: 100vh;
  width: 190px;
  background: var(--navbar);
  position: fixed;
  transform: ${props => props.show ? "translateX(0)" : "translateX(-190px)"};
  transition-duration: 0.4s;
`;

export const Quadrado = styled.div`
height: 108px;
background: rgba(0, 0, 0, 0.2);
margin-bottom: 32px;
display: flex;

a{
  display: contents;
}
`;


export const LogoImg = styled.img`
width: 83px;
margin: auto;
`;
