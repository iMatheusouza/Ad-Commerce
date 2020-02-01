import React, { Component } from 'react';
import { ScrollView, Text, FlatList, View } from 'react-native';
import rentals from './api.json'
import ViewComponent from './ViewComponent.js';

 class FeedScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          name: 'jhon',
          tel: '99999'
        },
        {
          name: 'jooj',
          tel: '5555'
        },
        {
          name: 'jeej',
          tel: '3333'
        },
        {
          name: 'joji',
          tel: '11111'
        }
      ]
    };
  }

  render() {
    return (
      <View>
        <Text>
          Anúncios
        </Text>
        <FlatList
          data={rentals}
          renderItem={({index, item}) =>(
            <ViewComponent
            title={item.title}
            value={item.value}
            />
          )}
        />
      </View>
    );
  }
}

export default FeedScreen