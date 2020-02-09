import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {connect} from 'react-redux'
import ViewComponent from './ViewComponent';

 class SampleScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <ViewComponent/>
    );
  }
}

export default SampleScreen;
