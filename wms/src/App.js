import React, { Fragment } from 'react';
import './styl.js';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter, Route } from 'react-router-dom';
import Nav from './common/nav';
import {Globalstyle} from './styl';
import 'antd/dist/antd.css';

function App() {
  return (
    <Fragment>
      <Globalstyle>
      </Globalstyle>
      <Provider store={store}>
        <BrowserRouter>
          <Route path="/" exact component={Nav}></Route>
        </BrowserRouter>
      </Provider>
    </Fragment>
  );
}

export default App;
