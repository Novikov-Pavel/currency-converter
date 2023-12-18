import React from 'react'
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from "./Main";
import Converter from './Converter';
import store from './Redux/state';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        {/* <Route path="/converter" component={Converter} /> */}
      </Switch>
    </BrowserRouter>
  </Provider>
);