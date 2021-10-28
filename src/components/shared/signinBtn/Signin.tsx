import React from "react";
import { Wrapper } from "./Signin.style";

type SigninType = {
	className?: any;
};
const Signin: React.FC<SigninType> = ({ className }) => {
	return (
		<Wrapper>
			<a href="#" className={"join" ? "join" : className}>
				Réjoindre la Communauté
			</a>
		</Wrapper>
	);
};

export default Signin;
