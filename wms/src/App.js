import React, { Fragment } from 'react';
import './styl.js';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter, Route } from 'react-router-dom';
import {Globalstyle} from './styl';
import 'antd/dist/antd.css';
import {Layout} from 'antd';
import Nav from './common/nav';
import User from './pages/user';
import Customer from './pages/customer';
import In_Out_Record from './pages/in_out_record';
import Product_Out_Record from './pages/product_out_record';
import Product_In_Record from './pages/product_in_record';
import Product from './pages/product';
import WareHouse from './pages/warehouse';
import Head from './common/head'

function App() {
  return (
    <Fragment>
      <Globalstyle>
      </Globalstyle>
      <Provider store={store}>
      <Layout style={{ minHeight: '100vh' }}>
        <BrowserRouter>
          <Nav></Nav>
          <Layout>
          <Head></Head>
          <Route path="/customer" exact component={Customer}></Route>
          <Route path="/user" exact component={User}></Route>
          <Route path="/in_out_record" exact component={In_Out_Record}></Route>
          <Route path="/product_in_record" exact component={Product_In_Record}></Route>
          <Route path="/product_out_record" exact component={Product_Out_Record}></Route>
          <Route path="/product" exact component={Product}></Route>
          <Route path="/warehouse" exact component={WareHouse}></Route>
          </Layout>
        </BrowserRouter>
        </Layout>
      </Provider>
    </Fragment>
  );
}

export default App;
