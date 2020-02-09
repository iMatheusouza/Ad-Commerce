import React, { Component } from 'react';
import { FlatList } from 'react-native';
import ViewComponent from './ViewComponent.js';
import axios from 'axios';
import { connect } from 'react-redux'


 class FeedScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rentals: null,
    };
    
  }

  loadProducts = (data) => {
    return({
      type: 'LOAD_PRODUCTS',
      payload: data
    })
  }

  componentDidMount () {
    axios.get('https://my-json-server.typicode.com/eduardobvale/demo/rentals')
    .then(res => {
      const rentals = res.data
      this.setState({rentals})
    })
  }

  componentDidUpdate() {
    return this.props.dispatch(this.loadProducts(this.state.rentals))
  }

  navigateToProduct = (index) => {
    this.props.navigation.navigate('ProductDetails', {
      data: index
    })
  }

  static navigationOptions = {
    title: 'Sétimo Andar'
  }

  render() {
    return (
        <FlatList
          data={this.state.rentals}
          keyExtractor={(item) => item.id}
          renderItem={({item, index}) =>(
            <ViewComponent
              title={item.title}
              price={'$'+ item.value}
              imageSource={item.image}
              itemId={item.id}
              navigateToProduct={() => this.navigateToProduct(index)}
            />
          )}
        />
    );
  }
}
const mapDispatchToProps = dispatch => {
  return{
    dispatch
  }
}

export default connect(null, mapDispatchToProps)(FeedScreen)