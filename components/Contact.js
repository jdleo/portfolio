import React from 'react';
import {Container, Divider, Button, Form, Segment, TextArea} from 'semantic-ui-react';

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

       var http = require("http");

        var options = {
          hostname: 'https://api.mailjet.com',
          port: 80,
          path: '/v3/send',
          method: 'POST',
          auth: '68c3c366255c769c4ca3ecfc952d41c1:ec763208675bb6ee27f57d1ab777f203',
          headers: {
              'Content-Type': 'application/json',
          }
        };
        var req = http.request(options, function(res) {
          console.log('Status: ' + res.statusCode);
          console.log('Headers: ' + JSON.stringify(res.headers));
          res.setEncoding('utf8');
          res.on('data', function (body) {
            console.log('Body: ' + body);
          });
        });
        req.on('error', function(e) {
          console.log('problem with request: ' + e.message);
        });
        // write data to request body
        req.write(
          `{"FromEmail": "pilot@mailjet.com", "FromName":"Mailjet Pilot", "Subject":"${this.state.subject}", "Text-part":"${this.state.body}", Recipients: [{"Email":"yo@jdleo.me"}]}`
        );
        req.end();

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
