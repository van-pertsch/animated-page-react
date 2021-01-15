import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
  margin 0;
  padding: 0;
  box-sizing: border-box;
}

body{
  background: #fcfcfc;
  font-family: 'Inter', sans-serif;
  color: #222624;
  overflow-x: hidden;
}

a{
  font-size: 1.1.rem;
}
button{
  font-weight: bold;
  font-size: 1.1.rem;
  cursor: pointer;
  padding: 1rem 2rem;
  border: 3px solid #10ac02;
  background: transparent;
  color: #222624;
  transition: all 0.5s ease;
  &:hover{
    background-color:#10ac02;
    color: #222624;
  }
}
h1{
  color: #222624;
}
 h2{
    font-weight: lighter;
    font-size: 3rem;
    color: #222624;
  }
  h3{
    color: #222624;
  }
  h4{
    font-size: 2rem;
    font-weight: bold;
    color: #222624;

  }
  span{
    font-weight: bold;
    color:#10ac02;
  }
  p{
    padding: 3rem 0rem;
    color: #222624;
    font-size: 1.2rem;
    line-height: 150%;
  }
  img{
    max-width:100%;
  }
`;

export default GlobalStyle;
