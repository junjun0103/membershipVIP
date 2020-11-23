import logo from './logo.svg';
import './App.css';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//firebase

//redux
import { Provider } from 'react-redux';
import store from './store';

// pages
import Header from './components/ui/HeaderUser';
import ManagerPage from './components/manager/Manager.page';
import CustomerPage from './components/home/Home.page';

//import Footer from './components/ui/Footer.component';

function App() {

  return (
    <Router>
      <Provider store={store}>
        <Header id='navbar' />
        <Switch>
          <Route exact path='/' component={CustomerPage} />
          <Route exact path='/customerpage' component={CustomerPage} />
          <Route exact path='/managerpage' component={ManagerPage} />
        </Switch>
      </Provider>
    </Router>
  );
}

export default App;
