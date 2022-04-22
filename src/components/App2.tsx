import { useState } from "react";
import styled from 'styled-components'
import { isPropertySignature } from "typescript";

type PropsType = {
  Desactive : string
}

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width:100% ;
  height: 100vh;

  p{
    font-size: 0.8rem;
    font-family: Verdana, sans-serif;
    color: #9595cd;
    margin-top: 1rem;
  }

  h1{
    width: 100%;
    text-align: center;
    font-size: 1.5rem;
    font-family: Verdana, sans-serif;
    color: #9595cd;
    margin-bottom: 1rem;
  }
`

export const Buttons = styled.button.attrs((props:PropsType) => ({
  disabled : props.Desactive,
}))`
  background: red;
  padding: 1.5rem 2.5rem;
  border:0;
  color: #fff;
  border-radius: 0.5rem;
  font-size: 1rem;
  cursor: pointer;

  &:first-child {
    margin-right: 1rem;
  }

  span {
    font-weight: bold;
    display: inline-flex;

    &:first-child{
      margin-right: 1rem;
      width: 2rem;
      text-align: center
    }
  }
  &:hover{
    filter: brightness(0.8);
  }
`;

export const Content = styled.div`
  max-width: 500px;
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--blue-purple);
  padding: 1.5rem;

`;

 export const App2 = () => {
  const [numero, setNumero] = useState(0);
  const [isActiveDec, setIsActiveDec] = useState(true);
  const [isActiveInc, setIsActiveInc] = useState(true);

  const handleClickIncrement = () => {
    if(numero > 0){     
      setIsActiveInc(true)
    }
    setNumero(numero + 1);
    setIsActiveInc(true)
    setIsActiveDec(false)
  };

  const handleClickDecrement = () => {
    if(numero <= 1){
      setIsActiveInc(true)
      setIsActiveDec(true)
      setNumero(numero - 1); 
      return
    }
    
    setNumero(numero - 1);  
    setIsActiveDec(true)
    setIsActiveInc(false)
  };

  return (
  <Container>  
      <h1>Contador</h1>
    <Content>
    
      <Buttons onClick={handleClickIncrement}>
      <span>{isActiveInc === true ? numero : ''}</span>
      <span>Increment</span>
      </Buttons>    
      
      <Buttons Desactive={ numero === 0 ? true : false} onClick={handleClickDecrement}>
      <span> {isActiveDec === true ? numero : ''}  </span>
      <span>Decrement</span>
      </Buttons>  
    
    </Content>
    <p>💜 by of MRF.</p>
      </Container>   

  );
}