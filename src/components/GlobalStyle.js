import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
  margin 0;
  padding: 0;
  box-sizing: border-box;
}

body{
  background: #1b1b1b;
  font-family: 'Inter', sans-serif;
  color: white;
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
  border: 3px solid #23d997;
  background: transparent;
  color: white;
  transition: all 0.5s ease;
  &:hover{
    background-color:#23d997;
    color: white;
  }
}
h1{
  color: white;
}
 h2{
    font-weight: lighter;
    font-size: 3rem;
  }
  h3{
    color: white;
  }
  h4{
    font-size: 2rem;
    font-weight: bold;

  }
  span{
    font-weight: bold;
    color:#23d997;
  }
  p{
    padding: 3rem 0rem;
    color: #ccc;
    font-size: 1.2rem;
    line-height: 150%;
  }
  img{
    max-width:100%;
  }
`;

export default GlobalStyle;
