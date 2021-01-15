import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
//Global STyles
import GlobalStyle from "./components/GlobalStyle";

//PAge components
import Nav from "./components/Nav.js";
import Contact from "./pages/Contact.js";
import AboutUs from "./pages/AboutUs.js";
import OurWork from "./pages/OurWork.js";
import MovieDetail from "./pages/MovieDetail.js";
//Animations
import { AnimatePresence } from "framer-motion";
import ScrollTop from "./components/ScrollTop";
function App() {
  let location = useLocation();

  return (
    <div className="App">
      <GlobalStyle />
      <ScrollTop />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/" component={AboutUs} />
          <Route path="/contact" component={Contact} />
          <Route exact path="/work" component={OurWork} />
          <Route path="/work/:id" component={MovieDetail} />
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
