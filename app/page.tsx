import Header from "../components/layout/Header";
import Hero from "../components/sections/Hero";
import Collections from "../components/sections/Collections";
import About from "../components/sections/About";
import Footer from "../components/layout/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Collections />
      <About />
      <Footer />
    </>
  );
}