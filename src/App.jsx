import { Routes, Route } from 'react-router-dom';
import Homepage from './Pages/Home';
import Courses from './Pages/Courses';
import Services from './Pages/Services';
import Programs from './Pages/Programs';
import Register from './Pages/Register';

const App = () => {
  return (
    <>
      <Routes>
       <Route path="/" element={<Homepage />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/services" element={<Services />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/register" element={<Register />} />n 
      </Routes>
      <Footer />
    </>
  );
};

export default App; 
