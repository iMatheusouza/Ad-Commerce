import React from 'react'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import FeedScreen from './view/FeedScreen/index'
import ProductDetails from './view/ProductDetails/index'
import SampleScreen from './view/SampleScreen/index'



const Router = createStackNavigator({

  FeedScreen: {
    screen: FeedScreen,
  },
  ProductDetails: {
    screen: ProductDetails
  },
  SampleScreen: {
    screen: SampleScreen,
  },
  initialRouteName: 'FeedScreen'
})

export default createAppContainer(Router)