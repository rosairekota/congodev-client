import React from "react";
import BtnShared from "../../shared/btn-shared/BtnShared";
import { Wrapper } from "./Navbar.style";
import { BtnSharedType } from "../../shared/btn-shared/BtnShared";
import Link from "next/link";

export type NavBarType = {
  page: string;
};
const NavBar: React.FC<NavBarType> = ({ page }) => {
  if (page === "home") {
    return (
      <Wrapper>
        <div className="container">
          <div className="navbar">
            <Link href={"/"}>
              <a>CongoDev</a>
            </Link>

            <div className="collapse">
              <nav>
                <Link href={"/"}>
                  <a>Accueil</a>
                </Link>
                <Link href={"/services"}>
                  <a>services</a>
                </Link>
                <Link href={"/signin"}>
                  <a>Connexion</a>
                </Link>
              </nav>

              <BtnShared
                className="join"
                title="Réjoindre la Communauté"
                link="/join-community"
              />
            </div>
          </div>
        </div>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <div className="container">
        <div className="nav">
          <Link href={"/"}>
            <a>CongoDev</a>
          </Link>
          <SearchBar className="searchBar" />
          <Link href={"/services"}>
            <a>Services</a>
          </Link>
          <BtnShared
            className="join"
            title="Réjoindre la Communauté"
            link="/join-community"
          />
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
        placeholder="Rechercher un service Ex:site web,..."
      />
    </>
  );
};
