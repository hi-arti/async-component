import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from './components/Navigation';
import Routes from './components/Routes';

import {
  orderComparator,
  transformToLinkFormat,
  transformToRouteFormat
} from './helpers/tabs';

import { loadTabs } from './api/tabs';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isReady: false,
      tabs: []
    };
  }
  async componentDidMount() {
    const tabs = await loadTabs();
    this.setState({
      isReady: true,
      tabs
    });
  }
  render() {
    const { isReady, tabs } = this.state;
    const sordtedTabs = tabs.sort(orderComparator);

    const navigation = sordtedTabs.map(transformToLinkFormat);
    const routes = sordtedTabs.map(transformToRouteFormat);

    return (
      <Router>
        <div className="App">
          {isReady && (
            <div>
              <div className="app__navigation">
                <Navigation links={navigation} />
              </div>
              <div className="app__body">
                <Routes routes={routes} />
              </div>
            </div>
          )}
          {!isReady && <div>Loading...</div>}
        </div>
      </Router>
    );
  }
}

export default App;
