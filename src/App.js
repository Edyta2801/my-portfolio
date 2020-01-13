import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AnimatedSwitch } from 'react-router-transition';
import MainLayout from './components/MainLayout';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import './components/styles/App-style.css';
import styles from '../src/components/styles/App.scss';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <MainLayout />
        <AnimatedSwitch

          atEnter={{ opacity: 0, offset: 200 }}
          atLeave={{ opacity: 0 }}
          atActive={{ opacity: 1, offset: 0 }}
          className={styles.switchWrapper}
          mapStyles={styles => ({
            opacity: styles.opacity,
            transform: `translateY(${styles.offset}px)`,
          })}
        >
          <Route exact path="/" component={Projects} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/about" component={About} />
        </AnimatedSwitch>
        <MainLayout />
      </BrowserRouter>
    )
  }
}

export default App;
