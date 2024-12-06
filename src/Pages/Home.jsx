import Benefits from "../components/benefits";
import Hero from "../components/HeroPage"
import StudentOverview from "../components/studentsOverview";
import AboutSection from './../components/About';



const Home = () => {
  return (
    <div>
      <Hero />
      <AboutSection />
      <Benefits />
      {/* <StudentOverview /> */}
    </div>
  )
}

export default Home