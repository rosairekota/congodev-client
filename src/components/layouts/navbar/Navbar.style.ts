import Styled from "styled-components";

export const Wrapper = Styled.div`
.container{
   padding:0;
   height: 70px;
   border-bottom: 0.5px solid rgb(240, 237, 237);
   font-size: 14px;
}
.navbar{
    margin:auto;
    padding:0px 6%;
    display: flex;
    justify-content: space-between;
    position: relative;
    z-index: 1;
    flex-wrap: nowrap;
    padding-top: 12px;
    align-items: center;  
}
.collapse{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
nav{
     margin-right:30px;
     a{
    margin-left:30px;
    text-decoration: none;  
    }
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
