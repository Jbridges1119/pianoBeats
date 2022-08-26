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






// .button-85 {
//   padding: 0.6em 2em;
//   border: none;
//   outline: none;
//   color: rgb(255, 255, 255);
//   background: #111;
//   cursor: pointer;
//   position: relative;
//   z-index: 0;
//   border-radius: 10px;
//   user-select: none;
//   -webkit-user-select: none;
//   touch-action: manipulation;
// }

// .button-85:before {
//   content: "";
//   background: linear-gradient(
//     45deg,
//     #ff0000,
//     #ff7300,
//     #fffb00,
//     #48ff00,
//     #00ffd5,
//     #002bff,
//     #7a00ff,
//     #ff00c8,
//     #ff0000
//   );
//   position: absolute;
//   top: -2px;
//   left: -2px;
//   background-size: 400%;
//   z-index: -1;
//   filter: blur(5px);
//   -webkit-filter: blur(5px);
//   width: calc(100% + 4px);
//   height: calc(100% + 4px);
//   animation: glowing-button-85 20s linear infinite;
//   transition: opacity 0.3s ease-in-out;
//   border-radius: 10px;
// }

// @keyframes glowing-button-85 {
//   0% {
//     background-position: 0 0;
//   }
//   50% {
//     background-position: 400% 0;
//   }
//   100% {
//     background-position: 0 0;
//   }
// }

// .button-85:after {
//   z-index: -1;
//   content: "";
//   position: absolute;
//   width: 100%;
//   height: 100%;
//   background: #222;
//   left: 0;
//   top: 0;
//   border-radius: 10px;
// }