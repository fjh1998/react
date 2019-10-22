import React, { Fragment } from 'react';
import './styl.js';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter, Route } from 'react-router-dom';
import {Globalstyle} from './styl';
import 'antd/dist/antd.css';
import {Layout} from 'antd';
import loadable from './common/loadable';
import PrivateRoute from './common/route/PrivateRoute';

const Customer=loadable(()=>import("./pages/customer"));
 const Nav=loadable(()=>import("./common/nav"));
const User=loadable(()=>import("./pages/user"));
const In_Out_Record=loadable(()=>import("./pages/in_out_record"));
const Product_Out_Record=loadable(()=>import("./pages/product_out_record"));
const Product_In_Record=loadable(()=>import("./pages/product_in_record"));
const WareHouse=loadable(()=>import("./pages/warehouse"));
const Head=loadable(()=>import("./common/head"));
const Product=loadable(()=>import("./pages/product"));
const Login=loadable(()=>import("./common/login"));


const Head_Nav=(login)=>{
  if(login){
    return (
      <Fragment>

    <Nav></Nav>
      <Head></Head>
      </Fragment>
      );
  }else{
    return;
  }
}
function App() {
  return (
    <Fragment>
      <Globalstyle>
      </Globalstyle>
      <Provider store={store}>
      <Layout style={{ minHeight: '100vh' }}>
        <BrowserRouter>
          <Nav></Nav>
          <Route path="/login" exact component={Login}></Route>
          <Layout>
          {/* {Head_Nav(store.getIn(["LoginReducer","login"]))} */}
          <Head></Head>
          <PrivateRoute path="/customer" exact component={Customer}></PrivateRoute>
          <PrivateRoute path="/user" exact component={User}></PrivateRoute>
          <PrivateRoute path="/in_out_record" exact component={In_Out_Record}></PrivateRoute>
          <PrivateRoute path="/product_in_record" exact component={Product_In_Record}></PrivateRoute>
          <PrivateRoute path="/product_out_record" exact component={Product_Out_Record}></PrivateRoute>
          <PrivateRoute path="/product" exact component={Product}></PrivateRoute>
          <PrivateRoute path="/warehouse" exact component={WareHouse}></PrivateRoute>
          </Layout>
        </BrowserRouter>
        </Layout>
      </Provider>
    </Fragment>
  );
}

export default App;
