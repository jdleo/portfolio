import React from 'react';
import Layout from '../components/Layout';
import About from '../components/About';
import Contact from '../components/Contact';
import Projects from '../components/Projects';
import Tech from '../components/Tech';
import Home from '../components/Home';
import {Card, Segment, Button} from 'semantic-ui-react';
import ReactGA from 'react-ga';

class Main extends React.Component {

  state = {
    currentPage: 'home'
  }

  //google analytics
  componentDidMount() {
    ReactGA.initialize('UA-125401051-1')
    ReactGA.pageview(document.location.pathname)
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
          <Button inverted onClick={() => {
              ReactGA.event({
                category: 'User',
                action: 'Switched to Home page'
              });
              this.setState({'currentPage':'home'})
            }}>
            Home
          </Button>
          <Button inverted color='red' onClick={() => {
              ReactGA.event({
                category: 'User',
                action: 'Switched to About page'
              });
              this.setState({'currentPage':'about'})
            }}>
            About Me
          </Button>
          <Button inverted color='blue' onClick={() => {
              ReactGA.event({
                category: 'User',
                action: 'Switched to Projects page'
              });
              this.setState({'currentPage':'projects'})
            }}>
            Projects
          </Button>
          <Button inverted color='yellow' onClick={() => {
              ReactGA.event({
                category: 'User',
                action: 'Switched to Tech page'
              });
              this.setState({'currentPage':'tech'})
            }}>
            Tech
          </Button>
          <Button inverted color='green' onClick={() => {
              ReactGA.event({
                category: 'User',
                action: 'Switched to Contact page'
              });
              this.setState({'currentPage':'contact'})
            }}>
            Contact
          </Button>
        </Card.Group>
        {pages[this.state.currentPage]}
      </Layout>
    );
  }
}

export default Main;
