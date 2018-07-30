import React from 'react';
import { List, Image, Button, Comment, Header, Container, Segment} from 'semantic-ui-react';


export default () => {
  return (
    <Container style={{'marginTop':'100px'}}>
      <Segment raised>
        <Comment.Group>
          <Comment>
            <Comment.Avatar src='https://raw.githubusercontent.com/jdleo/portfolio/master/assets/me.JPG' />
            <Comment.Content>
              <Comment.Author as='a'>John Leonardo</Comment.Author>
              <Comment.Metadata>
                <div>27 minutes ago</div>
              </Comment.Metadata>
              <Comment.Text>Hi, welcome to my portfolio website! 👋</Comment.Text>
              <Comment.Actions>
                <Comment.Action>Reply</Comment.Action>
              </Comment.Actions>
            </Comment.Content>
          </Comment>

          <Comment>
            <Comment.Avatar src='https://raw.githubusercontent.com/jdleo/portfolio/master/assets/me.JPG' />
            <Comment.Content>
              <Comment.Author as='a'>John Leonardo</Comment.Author>
              <Comment.Metadata>
                <div>14 minutes ago</div>
              </Comment.Metadata>
              <Comment.Text>I currently attend <a href="https://www.csus.edu">Sac State</a>, and I'm set to graduate in 2019 🐝 </Comment.Text>
              <Comment.Actions>
                <Comment.Action>Reply</Comment.Action>
              </Comment.Actions>
            </Comment.Content>
          </Comment>

          <Comment>
            <Comment.Avatar src='https://raw.githubusercontent.com/jdleo/portfolio/master/assets/me.JPG' />
            <Comment.Content>
              <Comment.Author as='a'>John Leonardo</Comment.Author>
              <Comment.Metadata>
                <div>3 minutes ago</div>
              </Comment.Metadata>
              <Comment.Text>Feel free to look around and visit the sections above. If you wanna chat with me, you can use the Contact form, or shoot me an email at <a href="mailto:hey@jdleo.me">hey@jdleo.me</a> 🚀 </Comment.Text>
              <Comment.Actions>
                <Comment.Action>Reply</Comment.Action>
              </Comment.Actions>
            </Comment.Content>
          </Comment>

          <Comment>
            <Comment.Avatar src='https://raw.githubusercontent.com/jdleo/portfolio/master/assets/me.JPG' />
            <Comment.Content>
              <Comment.Author as='a'>John Leonardo</Comment.Author>
              <Comment.Metadata>
                <div>Just now</div>
              </Comment.Metadata>
              <Comment.Text>
                This website was made using the following tech:<br/>
                <List>
                  <List.Item>
                    <Image src='https://arcweb.co/wp-content/uploads/2016/10/react-logo-1000-transparent.png' size='mini' />
                    <List.Content>
                      <List.Header>React</List.Header>
                      <List.Description>
                        Front-end
                      </List.Description>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <Image src='https://cdn.iconscout.com/public/images/icon/free/png-512/heroku-logo-32b6b7385fb386e0-512x512.png' size='mini' />
                    <List.Content>
                      <List.Header>Heroku</List.Header>
                      <List.Description>
                        Deploying
                      </List.Description>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <Image src='https://camo.githubusercontent.com/0445a09c5eeb90aca6a4975fffced9abfeb24d61/68747470733a2f2f72656163742e73656d616e7469632d75692e636f6d2f6c6f676f2e706e67' size='mini' />
                    <List.Content>
                      <List.Header>Semantic</List.Header>
                      <List.Description>
                        UI
                      </List.Description>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <Image src='https://seeklogo.com/images/N/next-js-logo-7929BCD36F-seeklogo.com.png' size='mini' />
                    <List.Content>
                      <List.Header>Next</List.Header>
                      <List.Description>
                        Rendering
                      </List.Description>
                    </List.Content>
                  </List.Item>
                </List>
              </Comment.Text>
              <Comment.Actions>
                <Comment.Action>Reply</Comment.Action>
              </Comment.Actions>
            </Comment.Content>
          </Comment>
        </Comment.Group>
      </Segment>
    </Container>
  );
};
