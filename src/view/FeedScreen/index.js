import React, { Component } from 'react';
import { FlatList } from 'react-native';
import ViewComponent from './ViewComponent.js';
import axios from 'axios';

 class FeedScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rentals: []
    };
  }

  componentDidMount () {
    axios.get('https://my-json-server.typicode.com/eduardobvale/demo/rentals')
    .then(res => {
      const rentals = res.data
      this.setState({rentals})
    })
  }

  navigateToProduct = () => {
    this.props.navigation.navigate('ProductDetails')
  }

  render() {
    return (
        <FlatList
          data={this.state.rentals}
          keyExtractor={(item) => item.id}
          renderItem={({index, item}) =>(
            <ViewComponent
              title={item.title}
              price={'$'+ item.value}
              imageSource={item.image}
              itemId={item.id}
              navigateToProduct={this.navigateToProduct}
            />
          )}
        />
    );
  }
}

export default FeedScreen