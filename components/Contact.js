import React from 'react';
import {Container, Divider, Button, Form, Segment, TextArea} from 'semantic-ui-react';


export default () => {
  return (
    <Container style={{'marginTop':'40px'}}>
      <Divider horizontal inverted>
        Contact
      </Divider>
      <Segment inverted>
        <Form inverted>
          <Form.Group widths='equal'>
            <Form.Input fluid label='Email address' placeholder='Email address' />
            <Form.Input fluid label='Subject' placeholder='Subject' />
          </Form.Group>
          <TextArea autoHeight placeholder='What do you wanna say?' rows={3} style={{'marginTop':'40px'}} />
          <Button type='submit' style={{'marginTop':'40px'}}>Submit</Button>
        </Form>
      </Segment>
    </Container>
  );
};
