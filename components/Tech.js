import React from 'react';
import {Container, Divider, Segment, Header, Label, Card} from 'semantic-ui-react';


export default () => {
  return (
    <Container style={{'marginTop':'40px'}}>
      <Divider horizontal inverted>
        Tech
      </Divider>

      <Segment raised textAlign='center'>
        <Header as='h3' textAlign='center'>
          Languages
        </Header>
        <Card.Group centered style={{'marginTop':'20px'}}>
          <Label.Group size='big'>
            <Label color ='orange'>Java</Label>
            <Label color ='blue'>Python</Label>
            <Label color ='black'>HTML</Label>
            <Label color ='yellow'>Javascript</Label>
            <Label color ='orange'>Swift</Label>
            <Label color ='grey'>R</Label>
            <Label color ='violet'>Kotlin</Label>
            <Label color ='blue'>C</Label>
            <Label color ='black'>Solidity</Label>
          </Label.Group>
        </Card.Group>
      </Segment>

      <Segment raised textAlign='center'>
        <Header as='h3' textAlign='center'>
          Frameworks / Libraries
        </Header>

        <Card.Group centered style={{'marginTop':'20px'}}>
          <Label.Group size='big'>
            <Label color ='teal'>React</Label>
            <Label color ='green'>Node</Label>
            <Label color ='grey'>Express</Label>
            <Label color ='orange'>Next</Label>
            <Label color ='teal'>Semantic</Label>
            <Label color ='purple'>MDL</Label>
            <Label color ='brown'>Mocha</Label>
            <Label color ='yellow'>Bootstrap</Label>
            <Label color ='black'>Mongodb</Label>
          </Label.Group>
        </Card.Group>
      </Segment>

      <Segment raised textAlign='center'>
        <Header as='h3' textAlign='center'>
          Cloud / Devops
        </Header>

        <Card.Group centered style={{'marginTop':'20px'}}>
          <Label.Group size='big'>
            <Label color ='purple'>Heroku</Label>
            <Label color ='blue'>Digital Ocean</Label>
            <Label color ='grey'>AWS</Label>
            <Label color ='yellow'>Firebase</Label>
            <Label color ='teal'>Firestore</Label>
            <Label color ='violet'>Google Cloud</Label>
            <Label color ='black'>Linux</Label>
            <Label color ='blue'>Docker</Label>
            <Label color ='violet'>Kubernetes</Label>
            <Label color ='yellow'>Travis</Label>
            <Label color ='orange'>Jenkins</Label>
            <Label color ='black'>Github</Label>
          </Label.Group>
        </Card.Group>
      </Segment>

      <Segment raised textAlign='center'>
        <Header as='h3' textAlign='center'>
          Editors
        </Header>
        <Card.Group centered style={{'marginTop':'20px'}}>
          <Label.Group size='big'>
            <Label color ='violet'>Brackets</Label>
            <Label color ='green'>Atom</Label>
            <Label color ='blue'>Xcode</Label>
            <Label color ='purple'>IntelliJ</Label>
            <Label color ='black'>Vim</Label>
          </Label.Group>
        </Card.Group>
      </Segment>

    </Container>
  );
};
