import Styled from "styled-components";

export const Wrapper = Styled.div`
h2{
  font-family: "Montserrat-Regular";
  font-size:32px;
  font-weight:700;
  margin:5rem 0;
  text-align:center;
  position:relative;
}
h2::after{
    content:"";
    
    width:50px;
    border:2px solid #121B4D;
    position:absolute;
    left:580px;
    top:50px;
}
`;
