import styled from 'styled-components';

export const NavBarLateral = styled.nav`
  background-color: var(--navbar);
  height: 100%;
  width: 190px;
  
  position: fixed;
  transition-duration: 0.6s;

  z-index: 10;

  box-shadow: ${props => props.show ? "0 0 15px black" : "none"};
  
  transform: ${props => props.show ? "translateX(0)" : "translateX(-190px)"};
`;

export const Quadrado = styled.div`
  height: 108px;
  background: var(--filtro);
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
