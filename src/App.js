import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Redirect, Route, Switch} from "react-router-dom";
import MainFooter from "./components/MainFooter";
import MyNavBar from "./components/Navbar";
import StartPage from "./pages/StartPage";
import PreRegisterPage from "./pages/PreRegisterPage";
import PricingPage from "./pages/PricingPage";
import FAQPage from "./pages/FAQPage";
import IntroPage from "./pages/IntroPage";

function App() {
  return (
    <div id={'all'}>
      <div>
        <MyNavBar />
      </div>
      <div id={'part'}>
        <Switch>
          <Route exact path="/" component={StartPage} />
          <Route exact path="/pre-register" component={PreRegisterPage} />
          <Route exact path="/pricing" component={PricingPage} />
          <Route exact path="/FAQ" component={FAQPage} />
          <Route exact path="/intro" component={IntroPage} />
          <Redirect from="/" to="/" />
        </Switch>
      </div>
      <div>
        <MainFooter />
      </div>
    </div>
  );
}

export default App;
