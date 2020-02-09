import React from 'react';
import { Text, View, TouchableOpacity, Button } from 'react-native';
import { connect } from 'react-redux'

// onPress={() => dispatch(ChangeProduct(products))}

function changeToString(term){
  return(
  {
    type: 'CHANGE_TO_STRING',
    payload: term
  })
}


const ViewComponent = ({
  data,
  dispatch
}) => (
  
  <View>
    <Text> {data[0].id} </Text>    
    <Button
      title={'clique em mim para texto'}
      onPress={() => dispatch(changeToString('mudei porra'))}
    />
    
  </View>
);


export default connect(state => ({data: state.data}))(ViewComponent);
