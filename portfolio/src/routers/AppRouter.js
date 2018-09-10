import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import Header from '../components/Header';
import NotFountPage from '../components/NotFountPage';
import Home from '../components/Home';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';


const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header>
      </Header>
      <Switch>
      <Route path="/" component={Home} exact={true}></Route>
      <Route path="/portfolio" exact={true} component={Portfolio}></Route>
      <Route path="/portfolio/:id" component={Portfolio}></Route>
      <Route path="/contact" component={Contact}></Route>
      <Route component={NotFountPage}></Route>
    </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;