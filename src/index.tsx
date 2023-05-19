import React from 'react'
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from "./Main";
import Converter from './Converter';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <BrowserRouter>      
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/converter" component={Converter} />
      </Switch>
    </BrowserRouter>
);