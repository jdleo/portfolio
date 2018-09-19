import React from 'react';
import Header from './Header';
import {Container} from 'semantic-ui-react';
import Head from 'next/head';

export default props => {
  return (
    <div style={{
        'background': '#0f2027', /* fallback for old browsers */
        'background': '-webkit-linear-gradient(to right, #0f2027, #203a43, #2c5364)', /* Chrome 10-25, Safari 5.1-6 */
        'background': 'linear-gradient(to right, #0f2027, #203a43, #2c5364)',
        'width': '100%',
        'width': '100vw',
        'height': '2000px',
        'float': 'left' /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
      }}>
      <Head>
        <link
          rel="stylesheet"
          href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.1/semantic.min.css">
        </link>
        <link rel='icon' type='image/x-icon' href='../favicon.ico' />
      </Head>
      <Header/>
      {props.children}
    </div>
  );
};
