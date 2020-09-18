import { MdMenu } from 'react-icons/md';
import styled from 'styled-components';

const tamanhoBorda = "5px";

export const BarraBusca = styled.div`
  height: 50px;
  background: var(--verde);

  display: flex;
  align-items: center;
  justify-items: center;

  position: fixed;
  top: 0;
  right: 0;

  z-index: 4;

  transition: width 0.6s, transform 0.3s;

  width: ${props => props.showMenu ? "calc(100% - 190px)" : "100%"};
  transform: ${props => props.showBusca ? "" : "translateY(-50px)"};
  
`;


export const Menu = styled(MdMenu)`
  color: white;
  margin-left: 20px;
  font-size: 30px;
  cursor: pointer;

`;

export const CampoBusca = styled.div`
  margin: auto;
`;

export const Formulario = styled.form`
  display: flex;
  width: 600px;
`;

export const Input = styled.input`
  font-size: 1rem;
  padding: 0px 0px 0px 20px;
  flex-grow: 1;

  border: none;
  border-radius: ${tamanhoBorda} 0 0 ${tamanhoBorda};
  outline: none;

  &::placeholder{
    color: var(--placeholder);
  }
`;

export const BotaoBusca = styled.button`
  background: var(--cinzaClaro);

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0;
  height: 35px;
  width: 50px;
  font-size: 23px;

  border: none;
  border-radius: 0 ${tamanhoBorda} ${tamanhoBorda} 0;
  outline: none;
  cursor: pointer;

  transition-duration: 0.3s;
  
  &:hover{
    background: var(--cinzaMedio);
  }
`;