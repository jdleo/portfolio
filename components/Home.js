import React from 'react';
import { Button, Comment, Form, Header, Container, Segment, Link} from 'semantic-ui-react';


export default () => {
  return (
    <Container style={{'marginTop':'40px'}}>
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
                <div>24 minutes ago</div>
              </Comment.Metadata>
              <Comment.Text>I'm a software engineer, and I'm learning new technologies every day 👨‍🎓</Comment.Text>
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
                <div>Just now</div>
              </Comment.Metadata>
              <Comment.Text>Feel free to look around and visit the sections above. If you wanna chat with me, you can use the Contact form, or shoot me an email at <a href="mailto:hey@jdleo.me">hey@jdleo.me</a> 🚀 </Comment.Text>
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
