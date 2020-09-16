import { MdSearch } from 'react-icons/md';
import styled from 'styled-components';

const tamanhoBorda = "5px";

export const BarraBusca = styled.div`
  height: 50px;
  background: #51A018;
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-items: center;
`;

export const CampoBusca = styled.div`
  margin: auto;
`;

export const Formulario = styled.form`
  display: flex;
  flex-direction: row;
  width: 600px;
  padding: 0 10 10 0;
  border-radius: 0 15px 15px 0 ;
  align-items: center;
`;

export const Input = styled.input`
  height: 30px;
  border-radius: ${tamanhoBorda} 0 0 ${tamanhoBorda};
  font-size: 1rem;
  font-weight: 500;
  padding: 5px 20px;
  flex-grow: 1;
  border: none;
  outline: none;
`;

export const IconeBuscar = styled(MdSearch)`
  background: var(--botaoBusca);
  color: white;
  border-radius: 0 ${tamanhoBorda} ${tamanhoBorda} 0;
  width: 50px;
  height: 30px;
  cursor: pointer;

`;

export const BotaoBusca = styled.button`
  border: none;
  cursor: pointer;
  height: 30px;
  width: 50px; 
  padding:0;
  display:flex;
  justify-content: center;
  align-items: center;
  /* background: white; */
  font-size: 23px;
  border-radius: 0 ${tamanhoBorda} ${tamanhoBorda} 0;
`;