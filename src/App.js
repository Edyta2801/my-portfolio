import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';
import About from './components/pages/About';

class App extends React.Component {
  render() {
    return (
      <main>
        <Header />
        <Switch>
          <Route exact path="/" component={Projects} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/about" component={About} />
        </Switch>
      </main>
    )
  }
}

export default App;
