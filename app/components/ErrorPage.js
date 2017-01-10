// @flow
import React, { Component } from 'react';

export default function ErrorPage(error) {
  return class ErrorPage extends Component {
    render() {
      return <div>{error.message}</div>
    }
  }
}
