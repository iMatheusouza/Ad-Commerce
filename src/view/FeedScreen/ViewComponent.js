import React, { Component } from 'react';
import {View, Text} from 'react-native'


const ViewComponent = ({title, value}) => {
    return(
      <View style={{backgroundColor: 'palevioletred', flex: 1,
       marginVertical: 8}}>
        <Text style={{color: 'white'}}>
          {title}
        </Text>
        <Text style={{fontSize: 12, color: 'white'}}>
          {value}
        </Text>
      </View>
    )
}

export default ViewComponent
