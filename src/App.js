import React, { Component } from 'react';
import{ Provider } from 'react-redux';

import './App.css';
import Posts from './component/Posts';
import Postform from './component/Postform';
import store from './store'



class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Postform />
          <hr/>
          <Posts />
        </div>
      </Provider>
    );
  }
}

export default App;
