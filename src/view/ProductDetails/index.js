import React, { Component } from 'react';
import { View, Text } from 'react-native';

 class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{justifyContent: 'center', flex: 1}}>
        <Text> Hello from Product details </Text>
      </View>
    );
  }
}

export default ProductDetails