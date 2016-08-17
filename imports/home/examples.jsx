import React from 'react';
import {FlowRouter} from 'meteor/kadira:flow-router';

const propTypes = {

};

const defaultProps = {

};

export default class Examples extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h2>
          Browse the examples
        </h2>
        <ul>
          <li>
            <a href={FlowRouter.path('state')}>
              Using React Component state
            </a>
          </li>
        </ul>
      </div>
    );
  }

}

Examples.propTypes = propTypes;
Examples.defaultProps = defaultProps;
