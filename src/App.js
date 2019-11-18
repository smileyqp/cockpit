import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from "./store";
import './App.css';
import MapScreen from './routes/map';
import OprScreen from './routes/operation';
import MainVideo from './routes/mainvideo/';
import BackVideo from './routes/backvideo';
import CenterScreen from './routes/centerscreen';

function App() {
  return (
    <Provider store={store}>
      <div className="App" style={{overflow:'hidden'}}>
        <Router>
          <div>
            <Route path='/opr' component={OprScreen} />
            <Route path='/main' component={MainVideo} />
            <Route path='/back' component={BackVideo} />
            <Route path='/center' component={CenterScreen} />
            <Route path='/map' component={MapScreen} />
          </div>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
