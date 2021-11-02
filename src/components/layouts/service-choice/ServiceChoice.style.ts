import Styled from "styled-components";
import { BaseColors } from "../../../../theme/_variables/base";
export const Wrapper = Styled.div`
  width: 100%;
  height: 500px;
  background:#121B4D;
  z-index:99999;
  .title{
    color:${BaseColors.defaultColor};
  }
`;
