import {View, Text} from 'react-native';
import React from 'react';
import Home from './src/containers/Home/index';

export default function App() {
  return (
    <View style={{flex: 1}}>
      <Home value={3} />
      <Home value={4} />
    </View>
  );
}
