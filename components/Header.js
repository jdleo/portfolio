import React from 'react';
import {Image, Button, Segment} from 'semantic-ui-react';


export default () => {
  return (
    <div>
      <Image
        src='/images/wireframe/square-image.png'
        size='medium'
        circular
      />

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
    </div>
  );
};
