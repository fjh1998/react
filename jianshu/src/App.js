import React, { Fragment } from 'react';
import { Globalstyle } from './style';
import Header from './common/header';
import { Globalstyle_iconfont } from './statics/iconfont/iconfont';
import store from './store/index';
import { Provider } from 'react-redux';
import {BrowserRouter,Route} from 'react-router-dom';
import Home from './pages/home';
import Detail from './pages/detail/loadable';
import Login from './pages/login';
import Write from './pages/write';



function App() {
  return (
    <Fragment>
      <Provider store={store}>
        <div>
        <Globalstyle></Globalstyle>
        <Globalstyle_iconfont></Globalstyle_iconfont>
          <BrowserRouter>
        <Header></Header>
          <Route path='/' exact component={Home}></Route>
          <Route path='/detail/:id' exact component={Detail}></Route>
          <Route path='/login' exact component={Login}></Route>
          <Route path='/write' exact component={Write}></Route>
          </BrowserRouter>
        </div>
      </Provider>
    </Fragment>
  );
}

export default App;

