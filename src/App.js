import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import ContactForm from './pages/contact-form/ContactForm';
import ReservationForm from './pages/reservation-form/ReservationForm';
import Home from './pages/home/Home';
import NotFound from './pages/notfound/NotFound';
import Monitor from './pages/monitor/Monitor';
import SessionTracker from './pages/sesion-tracker/SessionTracker';
import MovieDataBase from './pages/movies-data-base/MovieDataBase';
import WeatherApp from './pages/weather-app/WeatherApp';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route
            path="/contact-form"
            element={<ContactForm></ContactForm>}
          ></Route>
          <Route
            path="/reservation-form"
            element={<ReservationForm></ReservationForm>}
          ></Route>
          <Route path="/monitor" element={<Monitor></Monitor>}></Route>
          <Route
            path="/movies-database"
            element={<MovieDataBase></MovieDataBase>}
          ></Route>

          <Route
            path="/weather-app"
            element={<WeatherApp></WeatherApp>}
          ></Route>

          <Route
            path="/session-tracker"
            element={<SessionTracker></SessionTracker>}
          ></Route>

          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
