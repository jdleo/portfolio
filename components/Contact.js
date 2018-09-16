import React from 'react';
import {Container, Divider, Button, Form, Segment, TextArea} from 'semantic-ui-react';
import ReactGA from 'react-ga';

class Contact extends React.Component {

  state = {
    'email': '',
    'subject': '',
    'body': ''
  }

  handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

   onSubmit = (e) => {
       e.preventDefault();

       ReactGA.event({
        category: 'User',
        action: 'Submitted Contact Form',
        value: `Email: ${this.state.email} | Subject: ${this.state.subject} | Body: ${this.state.body}`
      });

       this.setState({
            email: '',
            subject: '',
            body: ''
       })
    }

  render() {
    return(
      <Container style={{'marginTop':'40px'}}>
        <Divider horizontal inverted>
          Contact
        </Divider>
        <Segment inverted>
          <Form inverted>
            <Form.Group widths='equal'>
              <Form.Input fluid label='Email address' placeholder='Email address' value={this.state.email} name='email' onChange={e => this.handleChange(e)}/>
            <Form.Input fluid label='Subject' placeholder='Subject'  value={this.state.subject} name='subject' onChange={e => this.handleChange(e)}/>
            </Form.Group>
            <TextArea
              autoHeight
              placeholder='What do you wanna say?'
              rows={3}
              style={{'marginTop':'40px'}}
              value={this.state.body}
              name='body'
              onChange={e => this.handleChange(e)}
            />
            <Button type='submit' style={{'marginTop':'40px'}} onClick={(e) => this.onSubmit(e)}>Submit</Button>
          </Form>
        </Segment>
      </Container>
    );
  }
}

export default Contact;
