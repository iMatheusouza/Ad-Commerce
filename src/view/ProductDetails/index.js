import React, { Component } from 'react';
import { connect } from 'react-redux'
import ViewComponent from '../ProductDetails/ViewComponent';

 class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  static navigationOptions = {
    title: 'Anúncio'
  }


  render() {
    const data = this.props.navigation.getParam('data')
    return (
      <ViewComponent
        product={this.props.rentals[data]}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    rentals: state.data
  }
}

export default connect(mapStateToProps)(ProductDetails)