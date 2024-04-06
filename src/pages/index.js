import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import HomePage from "./Home";
import AboutSection from "./about";
import WhyChooseUs from "./why-choose-us";
import ContactSection from "./contact-us";
import Services from "./services";
import OurFleet from "./our-fleet";
import PlaceToVisit from "./places-to-visit";
import Footer from "@/Components/Footer";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Subramanya Cab Service</title>
        <meta name="description" content="Subramanya cab service" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css" />
        <link rel="stylesheet" type="text/css" href="css/bootstrap.css" />
        <link href="https://fonts.googleapis.com/css?family=Poppins:400,700&display=swap" rel="stylesheet" />
        <link href="css/style.css" rel="stylesheet" />
        <link href="css/responsive.css" rel="stylesheet" />
      </Head>
      <HomePage />
      <AboutSection/>
      <OurFleet/>
      <Services/>
      <WhyChooseUs/>
      <PlaceToVisit/>
      <ContactSection/>
      <Footer/>

      <script type="text/javascript" src="js/jquery-3.4.1.min.js"></script>
      <script type="text/javascript" src="js/bootstrap.js"></script>
      <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js">
      </script>


    </>
  );
}
