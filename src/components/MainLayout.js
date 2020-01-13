import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Footer from '../components/Footer';

const MainLayout = ({children}) => (
  <div>
    <Header />
    <main>
      {children}
    </main>
    <Footer/>
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
