import React from 'react';
import {Image, Card} from 'semantic-ui-react';


export default () => {
  return (
    <div>
      <Card.Group centered style={{'marginTop': '20px'}}>
        <Image
          src='https://raw.githubusercontent.com/jdleo/portfolio/master/assets/me.JPG'
          circular
          style={{'width': '200px', 'height':'200px'}}
        />
      </Card.Group>
    </div>
  );
};
