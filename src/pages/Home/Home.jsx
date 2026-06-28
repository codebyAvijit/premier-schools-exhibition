import Appointments from "../../components/sections/Appointment/Appointments";
import ChooseSchool from "../../components/sections/ChooseSchool/ChooseSchool";
import Features from "../../components/sections/Features/Features";
import Gallery from "../../components/sections/Gallery/Gallery";
import Hero from "../../components/sections/Hero/Hero";
import OtherAttractions from "../../components/sections/OtherAttractions/OtherAttractions";
import ParticipatingSchools from "../../components/sections/ParticipatingSchools/ParticipatingSchools";
import Stats from "../../components/sections/Stats/Stats";
import Testimonials from "../../components/sections/Testimonials/Testimonials";
import VideoSection from "../../components/sections/VideoSection/VideoSection";

const Home = () => {
  return (
    <>
      <Hero />
      <Stats />
      <ParticipatingSchools />
      <VideoSection />
      <ChooseSchool />
      <Appointments />
      <OtherAttractions />
      <Features />
      <Testimonials />
      <Gallery />
    </>
  );
};

export default Home;
