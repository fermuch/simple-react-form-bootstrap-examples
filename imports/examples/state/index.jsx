import React from 'react';
import {Form, Field} from 'simple-react-form';
import moment from 'moment';
import BackHome from '../../home/back-home';
// import Text from 'simple-react-form-material-ui/lib/text'
// import Toggle from 'simple-react-form-material-ui/lib/toggle'
// import Textarea from 'simple-react-form-material-ui/lib/textarea'
// import DatePicker from 'simple-react-form-material-ui/lib/date-picker'
// import MultipleCheckbox from 'simple-react-form-material-ui/lib/multiple-checkbox'

// import some basic react-bootstrap inputs
import {
  StringField,
  TextField
} from 'simple-react-form-bootstrap/lib/fields/string';
import {
  SelectField
} from 'simple-react-form-bootstrap/lib/fields/select';

// import the default Array component from simple-react-form
import ArrayComponent from 'simple-react-form/lib/array';

// import react-datetime input
import {
  DatetimeField
} from 'simple-react-form-bootstrap/lib/fields/datetime';
// react-datetime needs to load it's own css
import 'react-datetime/css/react-datetime.css';


const propTypes = {

};

const defaultProps = {

};

export default class Index extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  getMusicTastesOptions() {
    return [
      {label: 'Rock', value: 'rock'},
      {label: 'Pop', value: 'pop'},
      {label: 'Classic', value: 'classic'}
    ];
  }

  render() {
    return (
      <div>
        <BackHome />
        <h1>State example</h1>
        <Form state={this.state} onChange={changes => this.setState(changes)}>
          <Field
            fieldName='firstName'
            label='First Name'
            type={StringField}
          />
          <Field
            fieldName='lastName'
            label='Last Name'
            type={StringField}
          />
          <Field
            fieldName='birthday'
            label='Birthday'
            type={DatetimeField}
            timeFormat={false}
            dateFormat="LL"
          />
          <Field
            fieldName='bio'
            label='Bio'
            type={TextField}
            rows={3}
          />
          <Field
            fieldName='musicTastes'
            label='Music Tastes'
            type={SelectField}
            options={this.getMusicTastesOptions()}
          />
          <Field fieldName='friends' label='Friends' type={ArrayComponent}>
            <Field fieldName='firstName' label='First Name' type={StringField} />
            <Field fieldName='lastName' label='Last Name' type={StringField} />
          </Field>
        </Form>
        <br/>
        <p>
          <b>Current State:</b>
        </p>
        <pre>
          {JSON.stringify(this.state, null, 2)}
        </pre>
      </div>
    );
  }

}

Index.propTypes = propTypes;
Index.defaultProps = defaultProps;
