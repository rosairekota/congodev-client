import Styled from "styled-components";

export const Wrapper = Styled.div`
.marketing{
    margin-top:100px;
    background-color:#ffff;
    /* box-shadow: rgba(1 1 1 1/10);
    border-bottom: 0.5px solid rgb(240, 237, 237); */
   box-shadow: rgba(1 1 1 1/10);
    height:100px;
    display:flex;
    justify-content: space-between;
    align-items: center;
    padding:0 70px;
  }
  .card{
      height:180px;
      width:220px;
      position:relative;
      bottom:10px;
      background-color:#ffff;
      border-radius:50px;
      box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset;
      display:flex;
      flex-direction:column;
      justify-content:space-evenly;
      padding:15px;
      h4{
        text-align:center;

      }
      p{
        line-height:1.5;
        font-weight:light;
      }
    }
    .card::after{
      height:500px;
      width:100px;
      background-color:red;
      position:absolute;
      right:0;
      left:-28px;
    }
  .services{
    background-color:#f7f7f7;
    height:500px;
  }
`;
