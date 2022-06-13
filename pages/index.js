import Head from "next/head";
import Image from "next/image";
import BrandComp from "../components/brand/BrandComp";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/navbar/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="min-h-screen sm:h-fit">
      <Head>
        <title>Weird Creatures</title>
        <meta name="description" content="Weird Creatures NFT." />
      </Head>

      <main className="flex flex-col space-between h-full">
        <Navbar />
        <BrandComp />
        <Footer />
      </main>
    </div>
  );
}
