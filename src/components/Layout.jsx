import React from "react";
import Header from "./Header";
import Main from "./Main";
import Section from "./Section";
import Footer from "./Footer";
import '../assets/css/globalStyles.css';

const Layout = () => (
  <div className="container">
    <Header />
    <Main />
    <Section />
    <Footer/>

  </div>
);

export default Layout;
