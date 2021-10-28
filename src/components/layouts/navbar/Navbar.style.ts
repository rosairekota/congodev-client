import Styled from "styled-components";

export const Wrapper = Styled.div`
.container{
   padding:0px;
   height: 90px;
   box-shadow: rgba(1 1 1 1/15);
   border-bottom: 0.5px solid rgb(240, 237, 237);
   padding-top: 20px;
   font-size: 14px;
}
.nav{
    max-width: 1128px;
    margin:auto;
    padding:12px 0 16px;
    display: flex;
    justify-content: space-between;
    position: relative;
    flex-wrap: nowrap;
    align-items: center;  
}
.nav a{
    width: 135px;
    height:34;
    text-decoration: none;
    
    
}
@media (max-width:768px) {
     .nav a{
          padding: 0 5px; 
     } 
}
.dev{
   
    padding: 10px 12px;
    margin-right: 12px;
    color:(29, 29, 29, 0.8);
    border-radius:4px;
    text-align: center;
    transition: all 0.2s ease-out;
}
.dev:hover{
    color:#eb3651;
}

.searchBar{
    outline: none;
    padding: 10px;
    border-radius:80px;
    width: 30%;
    height: 32px;
    padding: 5px 10px 5px 15px;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(221, 221, 221);
}`;
