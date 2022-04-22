import { App2 } from "./components/App2";
import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`

  :root{
    --blue-point: #2c2c54;
    --blue-purple: #343460;
  }
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    outline: none;
    background: var(--blue-point)
  }  
  span {
    background: transparent
  }
`

export const App = () => {
  return ( 
    <>
      <App2/>  
      <Global/>
    </> 
  );
}