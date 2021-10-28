import Styled from "styled-components";

export const Wrapper = Styled.div`
.banner{
 display: flex;
 align-items: flex-start;
 max-height: 700px;
 padding-bottom: 138px;
 padding-top: 10%;
 position: relative;
 flex-wrap: wrap;
 width: 100%;
 align-items:center;
 margin: auto;

}

.hiro{
    width: 100%;
}
.hiro h1,.hiro p{
    padding-bottom: 0;
    width: 50%;
}
.hiro h1{
    font-family: "Roboto-bold";
    font-size:50px;
    font-weight: bold;
    line-height: 50px
}
.hiro p{
    font-size:18px;
    font-weight: 200;
    line-height: 50px
    
}
.image{
    z-index: -1;
    position:absolute;
    width: 412px;
    left: 600px;
    top:-10px;
    height:851px;
}
.img__svgThree{
    z-index: -1;
    position:absolute;
    left: 100px;
    top:0px;
}
.img__svgTwo{
    z-index: -1;
    position:absolute;
    width: 412px;
    right: -200px;
    top:0px;
    height:851px;
}
.img__svgOne{
    position:absolute;
    width: 412px;
    left: -100px;
    top:-50px;
    height:851px;
    z-index: -1;
}
@media (max-width:768px){
    .banner{
        padding: 60px 0;
        margin: auto;
        min-height:0px;
    }
    .hiro h1,.hiro p{
    font-size:20px;
    text-align: center;
   width: 100%;
   line-height:2;
}
}
`;
