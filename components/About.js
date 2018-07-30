import React from 'react';
import {Comment, Image, Divider, Container, Segment} from 'semantic-ui-react';


export default () => {
  return (
    <div>
      <Container style={{'marginTop':'40px'}}>
        <Divider horizontal inverted>
          About Me
        </Divider>
        <Segment raised>
          <Comment.Group>
            <Comment>
              <Comment.Avatar src='https://raw.githubusercontent.com/jdleo/portfolio/master/assets/me.JPG' />
              <Comment.Content>
                <Comment.Author as='a'>John Leonardo</Comment.Author>
                <Comment.Metadata>
                  <div>1 hour ago</div>
                </Comment.Metadata>
                <Comment.Text>So, what do you wanna know?</Comment.Text>
              </Comment.Content>
            </Comment>

            <Comment>
              <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/matt.jpg' />
              <Comment.Content>
                <Comment.Author as='a'>James Jones</Comment.Author>
                <Comment.Metadata>
                  <div>57 minutes ago</div>
                </Comment.Metadata>
                <Comment.Text>How old are you, and where do you live?</Comment.Text>
              </Comment.Content>
            </Comment>

            <Comment>
              <Comment.Avatar src='https://raw.githubusercontent.com/jdleo/portfolio/master/assets/me.JPG' />
              <Comment.Content>
                <Comment.Author as='a'>John Leonardo</Comment.Author>
                <Comment.Metadata>
                  <div>53 minutes ago</div>
                </Comment.Metadata>
                <Comment.Text>I'm 22 years old, and I currently live in Sacramento, California. It's about 80 miles (128 km) from San Francisco!</Comment.Text>
              </Comment.Content>
            </Comment>

            <Comment>
              <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/jenny.jpg' />
              <Comment.Content>
                <Comment.Author as='a'>Tina Gray</Comment.Author>
                <Comment.Metadata>
                  <div>48 minutes ago</div>
                </Comment.Metadata>
                <Comment.Text>Besides the nerdy stuff, what are some things you like?</Comment.Text>
              </Comment.Content>
            </Comment>

            <Comment>
              <Comment.Avatar src='https://raw.githubusercontent.com/jdleo/portfolio/master/assets/me.JPG' />
              <Comment.Content>
                <Comment.Author as='a'>John Leonardo</Comment.Author>
                <Comment.Metadata>
                  <div>41 minutes ago</div>
                </Comment.Metadata>
                <Comment.Text>I love all sports. I played baseball for about 13 years, and was always playing some type of sport. My favorite baseball team is the Seattle Mariners, favorite football team is the San Francisco 49ers, and favorite basketball team is the Sacramento Kings. I love to travel and see different places, and I consider myself a big foodie (I guess every milennial is).</Comment.Text>
              </Comment.Content>
            </Comment>

            <Comment>
              <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
              <Comment.Content>
                <Comment.Author as='a'>Bobby Foster</Comment.Author>
                <Comment.Metadata>
                  <div>24 minutes ago</div>
                </Comment.Metadata>
                <Comment.Text>Why did you choose computer science / software engineering as a career path?</Comment.Text>
              </Comment.Content>
            </Comment>

            <Comment>
              <Comment.Avatar src='https://raw.githubusercontent.com/jdleo/portfolio/master/assets/me.JPG' />
              <Comment.Content>
                <Comment.Author as='a'>John Leonardo</Comment.Author>
                <Comment.Metadata>
                  <div>16 minutes ago</div>
                </Comment.Metadata>
                <Comment.Text>Obvious answer: it's the future 🚀<br/> However; in all seriousness, I absolutely love tech culture, and enjoy building software that make people's lives just a tad bit better. Computer Science is a growing field and I believe subfields such as AI, ML, VR, and Blockchain can improve people's lives for the better (if executed correctly).</Comment.Text>
              </Comment.Content>
            </Comment>

            <Comment>
              <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/joe.jpg' />
              <Comment.Content>
                <Comment.Author as='a'>Anthony Baker</Comment.Author>
                <Comment.Metadata>
                  <div>6 minutes ago</div>
                </Comment.Metadata>
                <Comment.Text>What are some of your favorite companies that you'd like to work for?</Comment.Text>
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
                  Here are just a small number of tech companies I admire, and would <i><b>love</b></i> to work for:<br/>
                <Image.Group size='tiny'>
                    <Image src='https://bloximages.newyork1.vip.townnews.com/tulsaworld.com/content/tncms/assets/v3/editorial/1/57/157dd321-2b35-5f39-a7ae-cd7f5b0af8ac/594408b8b5d38.image.jpg'/>
                    <Image src='http://www.vmastoryboard.com/wp-content/uploads/2014/08/Amazon-A-Logo.jpg'/>
                    <Image src='http://www.stickpng.com/assets/images/58482f67cef1014c0b5e4a81.png'/>
                    <Image src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Slack_Technologies_Logo.svg/2000px-Slack_Technologies_Logo.svg.png'/>
                    <Image src='https://upload.wikimedia.org/wikipedia/commons/f/ff/DigitalOcean_logo.svg'/>
                    <Image src='https://cdn.vox-cdn.com/thumbor/Pkmq1nm3skO0-j693JTMd7RL0Zk=/0x0:2012x1341/1200x800/filters:focal(0x0:2012x1341)/cdn.vox-cdn.com/uploads/chorus_image/image/47070706/google2.0.0.jpg'/>
                    <Image src='https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png'/>
                    <Image src='https://www.thriftysigns.com/wp-content/uploads/2018/04/Uber-Logo.jpg'/>
                    <Image src='http://www.stickpng.com/assets/images/58568d224f6ae202fedf2720.png'/>
                    <Image src='https://cdn.vox-cdn.com/thumbor/qI3R0shcA0ycV2ghLmpbkNtNf4s=/0x0:1100x733/1200x800/filters:focal(0x0:1100x733)/cdn.vox-cdn.com/assets/884081/Yelp_Logo_No_Outline_Color-01.jpg'/>
                    <Image src='http://1000logos.net/wp-content/uploads/2018/02/Font-Tesla-logo.jpg'/>
                    <Image src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Square%2C_Inc._logo.svg/2000px-Square%2C_Inc._logo.svg.png'/>
                    <Image src='https://usercontent2.hubstatic.com/13894859_f496.jpg'/>
                    <Image src='https://qph.fs.quoracdn.net/main-qimg-cc68cc9217a87306567d9769683a616f'/>
                    <Image src='https://vignette.wikia.nocookie.net/logopedia/images/6/64/Tencent_4.svg/revision/latest?cb=20170320130036'/>
                    <Image src='https://i.kym-cdn.com/photos/images/original/000/838/293/d69.png'/>
                    <Image src='https://cdn.mos.cms.futurecdn.net/u4gHczd7aPuj3CWL2wqovQ-320-80.jpg'/>
                    <Image src='https://image.freepik.com/free-icon/apple-logo_318-40184.jpg'/>

                  </Image.Group>
                </Comment.Text>
              </Comment.Content>
            </Comment>
          </Comment.Group>
        </Segment>
      </Container>
    </div>
  );
};
