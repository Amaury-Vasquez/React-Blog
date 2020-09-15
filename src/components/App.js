import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Layout from "./Layout";
import Home from "../pages/Home";
import About from "../pages/About";
import CTutorial from "../pages/CTutorial";
import "./styles/App.css";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/tutorials/C" component={CTutorial} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
