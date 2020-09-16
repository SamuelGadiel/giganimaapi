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
  width: 600px;
`;

export const Input = styled.input`
  border-radius: ${tamanhoBorda} 0 0 ${tamanhoBorda};
  font-size: 1rem;
  padding: 0px 0px 0px 20px;
  flex-grow: 1;
  border: none;

  &::placeholder{
    color: #999;
  }
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
  font-size: 23px;
  border-radius: 0 ${tamanhoBorda} ${tamanhoBorda} 0;
`;