import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Lip from '../components/Lip'
import Header from '../components/Header';
import HomePage from '../components/HomePage'
import NotFoundPage from '../components/NotFoundPage';
import YouthAndCanvas from '../components/YouthAndCanvas';
import TheBanisters from '../components/TheBanisters';


const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header/>
      <Switch>
      <Route path ="/" component={HomePage} exact={true}/>
      <Route path="/lip" component={Lip}/>
      <Route path="/thebanisters" component={TheBanisters}/>
      <Route path="/youthandcanvas" component={YouthAndCanvas}/>
      <Route component={NotFoundPage}/>
    </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;