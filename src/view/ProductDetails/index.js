import React, { Component } from 'react';
import { View, Text } from 'react-native';
import ViewComponent from '../ProductDetails/ViewComponent';

 class ProductDetails extends Component {
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

export default ProductDetails