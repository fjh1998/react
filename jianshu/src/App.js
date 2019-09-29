import React, { Fragment } from 'react';
import { Globalstyle } from './style';
import Header from './common/header';
import { Globalstyle_iconfont } from './statics/iconfont/iconfont';
import store from './store/index';
import { Provider } from 'react-redux';
import {BrowserRouter,Route} from 'react-router-dom';
import Home from './pages/home';
import Detail from './pages/detail';


function App() {
  return (
    <Fragment>
      <Provider store={store}>
        <div>
        <Globalstyle></Globalstyle>
        <Globalstyle_iconfont></Globalstyle_iconfont>
        <Header></Header>
          <BrowserRouter>
          <Route path='/' exact component={Home}></Route>
          <Route path='/detail' exact component={Detail}></Route>
          </BrowserRouter>
        </div>
      </Provider>
    </Fragment>
  );
}

export default App;

