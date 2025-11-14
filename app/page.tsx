import AboutMe from "./components/AboutMe";
import LazyScroll from "./components/animation/LazyScroll";
import SmoothScroll from "./components/animation/SmoothScroll";
import Comment from "./components/Comment";
import Footers from "./components/Footer";
import Gallery from "./components/Gallery";
import Jumbotron from "./components/Jumbotron";
import MyCertificate from "./components/MyCertificate";
import MyJourney from "./components/MyJourney";
import MyProjects from "./components/MyProjects";
import Navbars from "./components/Navbar";
import Services from "./components/Services";
import TechStack from "./components/TechStack";

export default function Home() {
  return (
    <main className="bg-primary-dark w-full h-full">
      {/* <LazyScroll> */}
      <SmoothScroll>
        <Navbars />
        <Jumbotron />
        <AboutMe />
        <MyJourney />
        <MyProjects />
        <TechStack />
        <MyCertificate />
        <Comment />
        {/* <Gallery /> */}
        <Services />
        <Footers />
      </SmoothScroll>
      {/* </LazyScroll> */}
    </main>
  );
}
