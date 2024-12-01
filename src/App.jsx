import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './Pages/Home';
import Courses from './Pages/Courses';
import Services from './Pages/Services';
import Programs from './Pages/Programs';
import Register from './Pages/Register';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/services" element={<Services />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
};

export default App;