import styled from 'styled-components';

export const ItemsLista = styled.span`
  display: flex;
  font-weight: 600;

  padding-left: 14px;
  padding-top: 16px;
  padding-bottom: 16px;

  color: white;

  &:hover{
    background: var(--verdeEscuro);
  }
`;

export const Icon = styled.span`
  margin-top : 1px;
  margin-right : 18px;
  transform: scale(1.2);
`;