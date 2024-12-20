import React from 'react'
import Header from './Components/Header/Header'
import Banner from './Components/Banner/Banner';
import Rows from './Components/Rows/Rows';
import Footer from './Components/Footer/Footer';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@fontsource/montserrat";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'

const App = () => {

  return (
    <>
      <Header />
      <Banner />
      <Rows />
      <Footer />
    </>
  )
}

export default App
