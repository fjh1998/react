import React, { Fragment } from 'react';
import { Globalstyle } from './style';
import Header from './common/header';
import { Globalstyle_iconfont } from './statics/iconfont/iconfont';
import store from './store/index';
import { Provider } from 'react-redux';

function App() {
  return (
    <Fragment>
      <Provider store={store}>
        <Globalstyle></Globalstyle>
        <Globalstyle_iconfont></Globalstyle_iconfont>
        <Header></Header>
      </Provider>
    </Fragment>
  );
}

export default App;

