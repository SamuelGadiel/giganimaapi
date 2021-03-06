import styled from 'styled-components';

export const MainPart = styled.ul`
  display:flex;
  flex-wrap: wrap;
  
  justify-content: center;
  list-style-type: none;
  
  padding:0;
  margin-top: 50px;

  position:relative;

  z-index: 2;
  
  left: ${props => props.show ? "190px" : "0px"};
  width: ${props => props.show ? "calc(100% - 190px)" : "100%"};
  transition: 0.6s;
`;

export const AreaAnime = styled.li`
  background: var(--cinzaClaro);

  width: 160px;
  height: 230px;

  border-radius: 5%;

  `;

export const Margin = styled.div`

  margin: ${props => props.show ? "15px 15px" : "15px 20px"};
  transition: 0.6s;
`;