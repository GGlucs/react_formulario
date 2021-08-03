import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom"

import Home from "../../pages/home"
import Contato from "../../pages/contato"
import Error from "../../pages/error";

function Router() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/contato" component={Contato}/>
          <Route path ="" component={Error}/>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default Router;
