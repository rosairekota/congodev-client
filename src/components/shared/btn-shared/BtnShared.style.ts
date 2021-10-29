import Styled from "styled-components";
import { BaseColors } from "../../../../theme/_variables/base";
export const Wrapper = Styled.div`
.join{
    
    padding: 12px 24px;
   
    background-color:${BaseColors.defaultColor};
     background:#f7f7f7;
    color:${BaseColors.primaryColor};
    border-radius:40px;
    text-align: center;
    transition: all 0.2s ease-out;
    height: 30px;
    line-height: 40px;
    border:1px solid #162a98;
}
.join:hover{
    box-shadow: inset 0 0 0 1px ${BaseColors.primaryColor};
    background:${BaseColors.primaryColor};
     color:#ffff;
}
`;
