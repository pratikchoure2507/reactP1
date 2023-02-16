import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from './component/Header.jsx';
import Home from './component/Home.jsx';
import Footer from './component/Footer.jsx';
import Contact from './component/Contact.jsx';
import Services from "./component/Services.jsx";

import "./style/app.scss";
import "./style/home.scss";
import "./style/header.scss";
import "./style/colors.scss";
import "./style/footer.scss";
import "./style/contact.scss";
import "./style/mediaquery.scss";


const App = () => {
  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/services' element={<Services/>}/>
      </Routes>
      < Footer />
    </Router>
  )
}

export default App;
