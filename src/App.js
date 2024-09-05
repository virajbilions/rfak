import React from 'react';
import Banner from "./components/Banner";
import Sponsor from "./components/Sponsor";
import TourDetail from "./components/TourDetail";
import About from "./components/About";
import Footer from "./components/Footer";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "reactstrap/lib";

function App() {
  return (
    <React.Fragment>
      <div className='app-bg'>
        <Banner />
        <Sponsor />
        <TourDetail />
        <About />
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
