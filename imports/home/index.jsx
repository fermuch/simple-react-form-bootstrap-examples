import React from 'react';
import Divider from 'material-ui/Divider';

import Install from './install';
import Examples from './examples';
import Links from './links';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Simple React Form Bootstrap</h1>
        <iframe
        src='https://ghbtns.com/github-btn.html?user=fermuch&amp;repo=simple-react-form-bootstrap&amp;type=star&amp;count=true'
        frameBorder={0}
        scrolling={0}
        width='170px'
        height='20px' />
        <p>
          Welcome to the example of simple-react-form-bootstrap.
        </p>

        <p>
          Simple React Form is a powerful framework that simplifies the use of forms in React.
          It's also compatible with simple-schema, so it works like autoform.
        </p>
        <Links />
        <Install />
        <Divider />
        <Examples />
      </div>
    );
  }
}
