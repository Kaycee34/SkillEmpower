import { Routes, Route } from 'react-router-dom';
import Homepage from './Pages/Home';
import Courses from './Pages/Courses';
import Services from './Pages/Services';
import Register from './Pages/Register';
import Header from './components/Header';
import Footer from './components/footer';
import About from './Pages/About';
import Contact from './Pages/contactus';


const App = () => {
  return (
    <>
      <Header />
      <Routes>
       <Route path="/" element={<Homepage />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/services" element={<Services />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contactus" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App; 
