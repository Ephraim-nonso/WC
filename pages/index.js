import Head from "next/head";
import Image from "next/image";
import BrandComp from "../components/brand/BrandComp";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/navbar/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="relative h-screen">
      <Head>
        <title>Weird Creatures</title>
        <meta name="description" content="Weird Creatures NFT." />
      </Head>

      <main className="flex flex-col space-between h-full">
        <Navbar />
        <BrandComp />
        <Footer />
        {/* 
        <div className="flex min-h-screen justify-center items-center">
          <div className="max-w-xs rounded overflow-hidden shadow-lg my-2">
            <img
              className="w-full"
              src="https://tailwindcss.com/img/card-top.jpg"
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Next + Tailwind ❤️</div>
              <p className="text-grey-darker text-base">
                Next and Tailwind CSS are a match made in heaven, check out this
                article on how you can combine these two for your next app.
              </p>
            </div>
          </div>
        </div> */}
      </main>
    </div>
  );
}
