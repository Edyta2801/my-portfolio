import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// import { AnimatedSwitch } from "react-router-transition";
import MainLayout from "./components/MainLayout";
import Projects from "./components/pages/Projects";
import Contact from "./components/pages/Contact";
import Skills from "./components/pages/Skills";
// import styles from "./components/styles/App-style.css";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <MainLayout>
          <Switch>
            {/* <AnimatedSwitch */}
            {/* eslint no-restricted-globals:0  */}
            {/* location={location}
            atEnter={{ opacity: 0, offset: 200 }}
            atLeave={{ opacity: 0 }}
            atActive={{ opacity: 1, offset: 0 }}
            className={styles.switchWrapper}
            mapStyles={(styles) => ({
              opacity: styles.opacity,
              transform: `translateY(${styles.offset}px)`,
            })}
          >  */}
            <Route exact path="/" component={Projects} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/skills" component={Skills} />
            <Route exact path="/contact" component={Contact} />
            {/* </AnimatedSwitch> */}
          </Switch>
        </MainLayout>
      </BrowserRouter>
    );
  }
}

export default App;
