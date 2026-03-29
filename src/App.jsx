import './App.css'
import Navbar from './Navbar.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home.jsx'
import About from './About.jsx'
import Vehicles from './Vehicles.jsx'
import Bikes from './Bikes.jsx'
import Cars from './Cars.jsx'
import RentDetails from './RentDetails.jsx'
import ActiveRental from './ActiveRental.jsx'
import Login from './Login.jsx'
import Signup from './Signup.jsx'
import { useState } from 'react'
import MyRentals from './MyRentals.jsx'
import Contact from './Contact.jsx'

function App() {

  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user"))
  );

  return (
    <>
      <Navbar user={user} setUser={setUser} />
      <ActiveRental />

      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/vehicles' element={<Vehicles />} />
        <Route path='/vehicles/2wheeler' element={<Bikes />} />
        <Route path='/vehicles/4wheeler' element={<Cars />} />
        <Route path="/rent/:brand/:name" element={<RentDetails />} />
        <Route path='/login' element={<Login setUser={setUser} />} />
        <Route path='/signup' element={<Signup setUser={setUser} />} />
        <Route path='/rentals' element={<MyRentals />} />
        <Route path='/contact' element={<Contact />} />

      </Routes>
    </>
  )
}

export default App