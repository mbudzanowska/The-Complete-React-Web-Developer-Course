import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import Header from '../components/Header';
import NotFountPage from '../components/NotFountPage';
import HelpPage from '../components/HelpPage';
import EditExpensePage from '../components/EditExpensePage';
import AddExpensePage from '../components/AddExpensePage';
import ExpenseDashboardPage from'../components/ExpenseDashboardPage';


const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header>
      </Header>
      <Switch>
      <Route path="/" component={ExpenseDashboardPage} exact={true}></Route>
      <Route path="/create" component={AddExpensePage}></Route>
      <Route path="/edit/:id" component={EditExpensePage}></Route>
      <Route path="/help" component={HelpPage}></Route>
      <Route component={NotFountPage}></Route>
    </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;