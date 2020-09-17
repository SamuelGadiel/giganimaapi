import styled from 'styled-components';

export const Wrap = styled.div`
  position: fixed;
  right: 0;
  z-index: 5;

  width: 100%;
  height: 100%;

  transition: background-color 0.6s;
  
  background-color: ${props => props.show ? "rgba(0, 0, 0, 0.4)" : "none"};
  visibility: ${props => props.show ? "" : "hidden"} ;
  
`;