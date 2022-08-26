import styled from "styled-components";

export const Black = styled.button`
  width: 40px;
  height: 130px;
  background: black;
  border: solid black 1px;
  position: absolute;
  z-index:10;
  margin: 1px;
  margin-left: -20px;
  :active {
    background: #333;
  }

`;

export const White = styled.button`

  width: 60px;
  height: 200px;
  background: white;
  border: solid black 1px;
  box-shadow: 2px 5px;
  margin: 1px;
  margin-left: "-20px";
  box-sizing: border-box;
  
  :hover {

    content: "";
    background: linear-gradient(
      45deg,
      #ff0000,
      #ff7300,
      #fffb00,
      #48ff00,
      #00ffd5,
      #002bff,
      #7a00ff,
      #ff00c8,
      #ff0000
    );
    background-size: 400%;
    z-index: -1;
    animation: glowing 20s linear infinite;
  }
  :active {
    opacity: 0.5;
    z-index:-100;
  }
    
  }
  @keyframes glowing {
    0% {
     background-position: 0 0;
   }
   50% {
     background-position: 400% 0;
   }
   100% {
     background-position: 0 0;
   }
 }
 
`;


