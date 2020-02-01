import React, { Component } from 'react';
import PageHeader from './page-header';

class UserForm extends Component {
  state = {  }
  render() { 
    return ( 
      <React.Fragment>
        <PageHeader title="Add Yourself!" />
      </React.Fragment>
     );
  }
}
 
export default UserForm;