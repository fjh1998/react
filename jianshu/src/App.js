import React, { Fragment } from 'react';
import { Globalstyle } from './style';
import Header from './common/header';
import { Globalstyle_iconfont } from './statics/iconfont/iconfont';
import store from './store/index';
import { Provider } from 'react-redux';
import {BrowserRouter,Route} from 'react-router-dom';
import Home from './pages/home/loadable';
import Detail from './pages/detail/loadable';
import Login from './pages/login/loadable';
import Write from './pages/write/loadable';

//登录界面不显示导航栏
const isHeader=()=>{
  if(store.getState().getIn(['loginReducer','login']))
  return     <Header></Header>;
  else return null;
}

function App() {
  return (
    <Fragment>
      <Provider store={store}>
        <div>
        <Globalstyle></Globalstyle>
        <Globalstyle_iconfont></Globalstyle_iconfont>
          <BrowserRouter>
          <Route path='/' exact component={Login}></Route>
          <Route children={isHeader}></Route>
         {/* <Header></Header> */}
          <Route path='/home' exact component={Home}></Route>
          <Route path='/detail/:id' exact component={Detail}></Route>
          <Route path='/write' exact component={Write}></Route>
          </BrowserRouter>
        </div>
      </Provider>
    </Fragment>
  );
}

export default App;

