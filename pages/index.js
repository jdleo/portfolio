import React from 'react';
import Layout from '../components/Layout';
import About from '../components/About';
import Contact from '../components/Contact';
import Projects from '../components/Projects';
import Tech from '../components/Tech';
import Home from '../components/Home';

class Main extends React.Component {

  state = {
    currentPage: 'home'
  }

  render () {

    const pages = {
      home: (
        <Home/>
      ),
      about: (
        <About/>
      ),
      projects: (
        <Projects/>
      ),
      tech: (
        <Tech/>
      ),
      contact: (
        <Contact/>
      )
    };

    return (
      <Layout>
        {pages[this.state.currentPage]}
      </Layout>
    );
  }
}

export default Main;
