import React from 'react';
import {Image, Button, Segment, Card} from 'semantic-ui-react';


export default () => {
  return (
    <div>
      <Card.Group centered style={{'marginTop': '60px'}}>
        <Image
          src='https://raw.githubusercontent.com/jdleo/portfolio/master/assets/me.JPG'
          circular
          style={{'width': '200px', 'height':'200px'}}
        />
      </Card.Group>

      <Card.Group centered style={{'marginTop':'40px'}}>
        <Button inverted>
          Home
        </Button>
        <Button inverted color='red'>
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
    </div>
  );
};
