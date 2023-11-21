import "./css/home2.css";
import Nav from "../templates/Nav";
import Hero from "../templates/Hero";
import Category from "../templates/Category";
import About from "../templates/About";
import Course from "../templates/Course";
import Footer from "../templates/Footer";

function Home() {
  return (
    <div>
      <Nav />
      <Hero />
      <Category />
      <About />
      <Course />
      <Footer />
    </div>
  );
}

export default Home;
