import React from 'react';
import {Container, Divider, Card, Message} from 'semantic-ui-react';

const items = [
  {
    header: 'FakeTime',
    description: 'A prank/entertainment app that allows users to fake FaceTime calls. No external libraries used besides Admob for advertising framework. Broke Top 100 US, acquired by private individual.',
    meta: 'iOS',
  },
  {
    header: 'Ghost',
    description: 'An anonymous social media app that allows users to see a local feed and allows them to upvote, downvote, and comment on posts. Uses Firestore for backend, Intercom for SaaS.',
    meta: 'iOS',
  },
  {
    header: 'Restaurant Roulette',
    description: 'An app that randomly picks a restaurant in your area based on the settings you provide it. Powered by Yelp API (got approval to use their branding by emailing their API team). Acquired by private individual.',
    meta: 'iOS',
  },
  {
    header: 'Spyglass',
    description: 'A social media app that lets you see users in your area (CoreLocationKit). Uses Firebase for backend, Google Cloud for push notifications. Peaked at #72 US, and #28 UK. 35,000+ users.',
    meta: 'iOS',
  },
  {
    header: 'Drop',
    description: 'More of an experimental app. A geolocation-based social media app that lets you drop pictures and text posts, pinned to a location through an Augmented Reality (AR) lens. Not many downloads, but just a simple app to showcase my competency with AR+Geo frameworks. Uses ARKit for AR, Firebase for backend, Geofire for geo queries.',
    meta: 'iOS',
  },
  {
    header: 'Garlicoin',
    description: 'A PoW cryptocurrency forked from Litecoin with a mission to introduce users to cryptocurrency in a friendly/memey way. Over 100k users and at one time, peaked at a $3,000,000 market cap (traded on three medium-sized exchanges). I was a core developer who built front-end apps including a paper wallet generator, a web-based wallet, and even deployed an algorithm to combat ASICs from mining on the network.',
    meta: 'Blockchain',
  },
  {
    header: 'Blockfunding',
    description: 'An open-source, decentralized crowdfunding platform built on Ethereum smart contracts (solidity). Frontend is done in React + Next + Semantic.',
    meta: 'Blockchain',
  },
  {
    header: 'Sagi',
    description: 'A Chrome add-on built in React that uses deep text analysis (a form of LSI) to determine if an ICO page is a scam or not. Work in progress, and not accurate at all.',
    meta: 'Chrome Add-on',
  },
  {
    header: 'Williams Tank Lines',
    description: 'A web front-end for a trucking company, built in React + Next + Semantic.',
    meta: 'Web app',
  },
  {
    header: 'Sac.cx',
    description: 'A lightweight link shortening service, with custom hashing algorithm and link analytics. Built with React + MDL + Firebase + Heroku',
    meta: 'Web app',
  },
  {
    header: 'Provably-Fair Dice',
    description: 'A demo for a dice gambling site. Not real money, but a proof-of-concept for a cryptographically-secure gambling site. Built with React + Semantic + Heroku',
    meta: 'Web app',
  }
  {
    header: 'pydevrant',
    description: "Helped work on an unofficial Python wrapper for the popular website, Devrant.",
    meta: 'Python SDK',
  }
]

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}


export default () => {
  return (
    <Container style={{'marginTop':'40px'}}>
      <Divider horizontal inverted>
        Projects
      </Divider>
      <Card.Group centered style={{'marginTop':'20px'}}>
        <Message
            header='Welcome to my projects page!'
            content='If you want to see any of the source codes, check out my Github, or ask me to see any links to projects in production! 🎉'
        />
      </Card.Group>
      <Card.Group centered items={shuffle(items)}/>
    </Container>
  );
};
