import Styled from "styled-components";
import { BaseColors } from "../../../../theme/_variables/base";
export const Wrapper = Styled.form`
.form__search{
    width: 400px;
    height: 43px;
    left: 70px;
    position: absolute;
    top: 320px;
    background: ${BaseColors.defaultColor};
    border: 1px solid #374BB9;
    outline: none;
   
    &::placeholder{
        font-family:"Montserrat-Regular";
        color:#535356;
        padding: 10px
    }
}
.btn__search{
    position: absolute;
    width: 110px;
    height: 43px;
    left: 470px;
    top: 320px;
    background: #121B4D;
    border: 1px solid #121B4D;
    box-sizing: border-box;
    border-radius: 0px 40px 40px 0px;
    color: #fff;
    cursor:pointer;
    &:hover{
        background-color:${BaseColors.darkColor};
        color:${BaseColors.defaultColor};
        text-align: center;
        transition: all 0.2s ease-out;
    }

}
`;
