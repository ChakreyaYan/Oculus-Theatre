import React from 'react';
import {
  Text,
  View
} from 'react-vr';
//Element
class Title extends React.Component {
  render() {
    return (
      <View style={{ margin: 0.1}}>
  <Text style={{fontSize: 0.25, textAlign: 'center', color: "#FFFFFF"}}>
  VR VIDEO APP
  </Text>
      </View>
    )
  }
}
module.exports = Title;
