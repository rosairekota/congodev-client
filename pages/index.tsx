import Head from "next/head";
import Image from "next/image";
import Banner from "../src/components/banner/Banner";
import NavBar from "../src/components/layouts/navbar/Navbar";
import { Wrapper } from "../src/components/layouts/navbar/Navbar.style";
type HomeProps = {
	title?: string;
};
const Home: React.FC<HomeProps> = () => {
	return (
		<>
			<Head>
				<title>Congodev</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<nav>
				<NavBar />
			</nav>

			<main className="main">
				<Banner />
			</main>
		</>
	);
};
export default Home;
