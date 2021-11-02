import Styled from "styled-components";
import { BaseColors } from "../../../../theme/_variables/base";
export const Wrapper = Styled.div`
height: 900px;
.marketing{
    margin-top:100px;
    background-color:${BaseColors.defaultColor};
    /* box-shadow: rgba(1 1 1 1/10);
    border-bottom: 0.5px solid rgb(240, 237, 237); */
    box-shadow: rgba(1 1 1 1/10);
    height:100px;
    display:flex;
    justify-content: space-between;
    align-items: center;
    padding:0 70px;
    font-weight:100;
    h4{
      font-weight:100;
      font-size:16px;
      color:#121b4d;
    }
  }
  .card__marketing{
      height:180px;
      width:320px;
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
    .card__marketing::after{
      content:"";
      height:100%;
      width:100%;
      background-color:#121b4d;
      position:absolute;
      right:0;
      left:-15px;
      z-index:-1;
       border-radius:70px;
      box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset;
    }

  .services{
    background-color: ${BaseColors.secondaryColor};;
    height:500px;
    display:flex;
    justify-content:space-between;
    align-items:start;
    .card__services{
      height:247px;
      width:411px;
      background-color:#ffff;
      border-radius:10px;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      display:flex;
      flex-direction:column;
      justify-content:space-evenly;
      padding:2%;
      margin:1%;
      .card__services-head{
        display:flex;
        align-items:center;
        img{
          width:50px;
          height:50px;
           
        }
      }
      h4{
        font-family:"Montserrat-light";
        font-size:20px;
        line-height:1.5;
         position:relative;
          left:10px;
          right:0;
          top:0;
      }
      p{
        font-size:14px;
        line-height:2;
        text-align:justify;
      
      }
    }
  }
  .services-bottom{
    margin:0;
    padding:0;
     display:flex;
    justify-content:flex-start;
    align-items:flex-start;
    position:relative;
    top:1180px;
    .card__services{
      width:408px;
       margin:0 1.5%;
    }
  }
`;
