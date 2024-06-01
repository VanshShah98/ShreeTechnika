"use client"

import Contact from "../../components/Slide4/contact";
import Footer from "../../components/footer";
import Land from "../../components/Slide1/slide1";
import Header from "../../components/Header/Header";
import Services from "../../components/Slide2/services";
import Slide3 from "../../components/Slide3/slide3";
import FormSlide from "../../components/Slide4/ContactForm";
import Certificate from "../../components/Slide5/Certificate";
import About from "../../components/Slide6/about";


const Home = () => (
  <div>
    <Header />
    <Land />
    <About/>
    <Services />
    <Slide3 />
    <Certificate/>
    <Contact />
    <FormSlide/>
    <Footer />
  </div>
);

export default Home;
