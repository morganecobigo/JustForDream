import React from "react";
import About from "../../components/about/About";
import Banner from "../../components/banner/Banner";
import Contact from "../../components/contact/Contact";
import Hero from "../../components/hero/Hero";
import Notice from "../../components/notice/Notice";
import Services from "../../components/services/Services";

function Home() {
  return (
    <div>
      <Hero id="hero" />
      <About id="about" />
      <Banner />
      <Services id="services" />
      <Notice id="notice" />
      <Contact id="Contact" />
    </div>
  );
}

export default Home;