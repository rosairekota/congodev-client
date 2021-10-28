import Styled from "styled-components";
import { BaseColors } from "../../../../theme/_variables/base";
export const Wrapper = Styled.form`
.form__search{
    width: 381px;
    height: 43px;
    left: 0;
    position: absolute;
    top: 320px;
    background: ${BaseColors.defaultColor};
    border: 1px solid #374BB9;
    outline: none;
    &::placeholder{
        color:#535356;
        padding: 10px
    }
}
.btn__search{
    position: absolute;
    width: 98px;
    height: 43px;
    left: 359px;
    top: 320px;
    background: #121B4D;
    border: 1px solid #121B4D;
    box-sizing: border-box;
    border-radius: 0px 20px 20px 0px;
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
