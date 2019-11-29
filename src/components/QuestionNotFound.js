import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export class QuestionNotFound extends Component {
  render() {
    return (
      <div textAlign="center">
        <h2>No Match 404 Error</h2>
        <p>Please SignIn to continue</p>
        <Link to='/'>Sign In</Link>
      </div>
    );
  }
}

export default QuestionNotFound;