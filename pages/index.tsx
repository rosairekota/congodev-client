import Head from "next/head";
import Image from "next/image";
import Banner from "../src/components/layouts/banner/Banner";
import NavBar from "../src/components/layouts/navbar/Navbar";
import { Wrapper } from "../src/components/layouts/navbar/Navbar.style";
import ServiceSection from "../src/components/layouts/service-section/ServiceSection";
import ServiceChoice from '../src/components/layouts/service-choice/ServiceChoice';
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
        <NavBar page={"home"} />
      </nav>

      <main className="main">
        <Banner />
        <ServiceSection />
        <ServiceChoice />
      </main>
    </>
  );
};
export default Home;
