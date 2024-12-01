import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './Pages/Home';
import Courses from './pages/Courses';
import Services from './pages/Services';
import Programs from './pages/Programs';
import Register from './pages/Register';

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