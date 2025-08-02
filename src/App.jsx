import React from "react";
import { Link } from "react-scroll";
import {Link as ScrollLink} from 'react-scroll';

import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Project from "./pages/Project.jsx";
import HomePage from "./pages/HomePage.jsx";

function App() {
  return (
    <>
      <Header />
      <HomePage/>
      <Footer />
    </>
  );
}

export default App;
