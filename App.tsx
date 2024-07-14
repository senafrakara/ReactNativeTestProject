import {View, Text} from 'react-native';
import React from 'react';
import UseMemoExample1 from './src/containers/UseMemoExample1/index';
import UseMemoExample2 from './src/containers/UseMemoExample2';

export default function App() {
  return (
    <View style={{flex: 1}}>
      <UseMemoExample1 value={3} />
      <UseMemoExample1 value={4} />
      <UseMemoExample2 />
    </View>
  );
}
