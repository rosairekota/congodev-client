import { createGlobalStyle } from "styled-components";
import { BaseColors } from "./_variables/base";

const GlobalStyle = createGlobalStyle`
@font-face {
	font-family: "Roboto";
	src: url("./fonts/Roboto/Roboto-Regular.ttf");
}
@font-face {
	font-family: "Roboto-bold";
	src: url("./fonts/Roboto/Roboto-Thin.ttf");
}
@font-face {
	font-family: "Roboto-light";
	src: url("./fonts/Roboto/Roboto-Light.ttf");
}
html,
body {
	padding: 0;
	margin: 0;
	font-family: "Roboto", sans-serif;
	background-color: ${BaseColors.defaultColor};
	background:#030450;
	background: rgb(3,4,80);
	//background: linear-gradient(360deg, rgba(3,4,80,1) 24%, rgba(3,4,80,0.8575805322128851) 67%);
	background-color: #f7f7f7;
}
body {
	overflow-y: scroll;
	overflow-x: hidden;
}

* {
	box-sizing: border-box;
}
a {
	color: inherit;
	text-decoration: none;
}
div,
h1,
h2,
h3,
h4,
h5,
h6,
i,
header,
html,
em,
li,
ul,
p,
img,
label,
nav,
small,
span {
	margin: 0;
	padding: 0;
	border: 0;
	outline: 0;
	font-size: 100%;
	vertical-align: baseline;
	background: transparent;
}
section{
	display: flex;
	max-width: 1200px;
}

.section{
	padding:0px 6%;
}

`;

export default GlobalStyle;
