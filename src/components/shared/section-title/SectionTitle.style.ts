import Styled from "styled-components";

export const Wrapper = Styled.div`
h2{
  font-size:32px;
  font-weight:400;
  margin:5rem 0;
  text-align:center;
  position:relative;
}
h2::after{
    content:"";
    
    width:50px;
    border:2px solid #121b4d;
    position:absolute;
    left:650px;
    top:40px;
}
`;
