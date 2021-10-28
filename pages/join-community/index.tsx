import React from "react";
import Head from "next/head";
import NavBar from "../../src/components/layouts/navbar/Navbar";

function JoinCommunity(props) {
  return (
    <>
      <Head>
        <title>Congodev</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav>
        <NavBar page={"join"} />
      </nav>

      <main className="main">JoinCommunity</main>
    </>
  );
}
export default JoinCommunity;