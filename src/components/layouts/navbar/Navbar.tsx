import React from "react";
import Signin from "../../shared/signinBtn/Signin";
import { Wrapper } from "./Navbar.style";
export type NavBarType = {};
const NavBar = (props) => {
	return (
		<Wrapper>
			<div className="container">
				<div className="nav">
					<a href="#">CongoDev</a>
					{/* <SearchBar className="searchBar" /> */}

					<a href="#" className="dev">
						Nos Développeurs
					</a>
					<Signin className="join" />
				</div>
			</div>
		</Wrapper>
	);
};
export default NavBar;

export const SearchBar = ({ className }) => {
	return (
		<>
			<input
				type="text"
				className={className}
				placeholder="Ex:ReactJS, VueJS..."
			/>
		</>
	);
};
