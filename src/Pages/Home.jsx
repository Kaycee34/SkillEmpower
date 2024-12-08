import Benefits from "../components/benefits";
import Hero from "../components/HeroPage"
import PopularCourses from "../components/popularCourses";
import StudentOverview from "../components/studentsOverview";
import TrustedByMillions from "../components/TrustedByMillions";
import AboutSection from './../components/About';



const Home = () => {
  return (
    <div>
      <Hero />
      <TrustedByMillions />
      <AboutSection />
      <PopularCourses />
      <Benefits />
      <StudentOverview />
    </div>
  )
}

export default Home