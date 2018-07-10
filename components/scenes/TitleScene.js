import React from 'react';
import {
  Text,
  View,
  VrButton,
  asset,
  Pano
} from 'react-vr';
import TitleLayout from './layouts/TitleLayout.js';
//Scene
class TitleScene extends React.Component {
  render() {
    return (
      <view>
       <Pano source={asset('title-background.jpg')}/>
       <TitleLayout text={this.props.text}/>
      //insert layout component
      </view>
    )
  }
}
module.exports = TitleScene;
