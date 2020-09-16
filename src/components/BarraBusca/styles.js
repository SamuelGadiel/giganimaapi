import { MdMenu } from 'react-icons/md';
import styled from 'styled-components';

const tamanhoBorda = "5px";

export const BarraBusca = styled.div`
  height: 50px;
  background: #51A018;
  /* overflow: hidden; */

  display: flex;
  align-items: center;
  justify-items: center;

  transition-duration: 0.4s;
  transition-property:width;

  position: ${props => props.show ? "absolute" : ""};

  right: ${props => props.show ? "0" : ""};

  width: ${props => props.show ? "calc(100% - 190px)" : "100vw"};
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
    color: #999;
  }
`;

export const BotaoBusca = styled.button`
  background: #efefef;

  display:flex;
  justify-content: center;
  align-items: center;
  
  padding:0;
  height: 35px;
  width: 50px; 
  font-size: 23px;

  border: none;
  border-radius: 0 ${tamanhoBorda} ${tamanhoBorda} 0;
  outline: none;
  cursor: pointer;
  
  transition-duration: 0.3s;
  
  &:hover{
    background: #d1d1d1;
  }
`;