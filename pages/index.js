import React from 'react';
import Layout from '../components/Layout';
import About from '../components/About';
import Contact from '../components/Contact';
import Projects from '../components/Projects';
import Tech from '../components/Tech';
import Home from '../components/Home';
import {Card, Segment, Button} from 'semantic-ui-react';

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
        <Card.Group centered style={{'marginTop':'40px'}}>
          <Button inverted onClick={() => {this.setState({'currentPage':'home'})}}>
            Home
          </Button>
          <Button inverted color='red' onClick={() => {this.setState({'currentPage':'about'})}}>
            About Me
          </Button>
          <Button inverted color='blue'>
            Projects
          </Button>
          <Button inverted color='yellow'>
            Tech
          </Button>
          <Button inverted color='green'>
            Contact
          </Button>
        </Card.Group>
        {pages[this.state.currentPage]}
      </Layout>
    );
  }
}

export default Main;
