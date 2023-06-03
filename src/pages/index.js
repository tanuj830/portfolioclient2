import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Testimonials from '../components/Testimonials/Testimonials';
import Timeline from '../components/TimeLine/TimeLine';
import FeatureBlog from '../components/blog/FeatureBlog';
import Contact from '../components/contact/Contact';
import Experience from '../components/experience/Experience';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';
const Home = () => {
  return (
    <>
        <Hero />
      <Projects />
      <Technologies />
      {/* <Experience /> */}
      <FeatureBlog />
      <Acomplishments />
      {/* <Timeline /> */}
      <Testimonials/>
      <Contact/>
    </>
  );
};

export default Home;
