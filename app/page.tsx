import Footer from "./components/Footer";
import Hero from "./components/Hero";

import Work from "./components/Work";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Experience from "./components/Experience";

export default function Home() {
  return (
    <main className=" bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 font-mono ">
      <div className="max-w-7xl w-full">
        <nav className="w-full mt-5 relative z-50 ">
          <NavBar></NavBar>
        </nav>
        <Hero></Hero>
        <About></About>
        <Work></Work>
        <Experience></Experience>
      </div>

      <Footer></Footer>
    </main>
  );
}
