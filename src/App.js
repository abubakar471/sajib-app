import './App.css';
import Home from './pages/Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DoctorAppointment from './pages/DoctorAppointment/DoctorAppointment';
import Registration from './pages/Registration/Registration';
import MyAppointment from './pages/MyAppointment/MyAppointment';
import Header from './components/Header/Header';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/doctor-appointment' element={<DoctorAppointment />} />
          <Route path='/registration' element={<Registration />} />
          <Route path='/my-appointment' element={<MyAppointment />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}



export default App;
