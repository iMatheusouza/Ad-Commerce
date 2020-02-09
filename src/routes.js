import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import FeedScreen from './view/FeedScreen/index'
import ProductDetails from './view/ProductDetails/index'



const Router = createStackNavigator({

  FeedScreen: {
    screen: FeedScreen,
  },
  ProductDetails: {
    screen: ProductDetails
  },
  initialRouteName: 'FeedScreen'
})

export default createAppContainer(Router)