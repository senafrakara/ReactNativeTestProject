import React, {useMemo, useState} from 'react';
import {SafeAreaView, Text, TextInput, Button, View} from 'react-native';

const UseMemoExample2 = () => {
  const [input, setInput] = useState(1);
  const [input2, setInput2] = useState(1);

  const multiplyWith3 = useMemo(() => {
    console.log('🚀 ~ multiplyWith3 ~ input:', input);
    return input * 3;
  }, [input]);

  return (
    <View>
      <TextInput
        style={{borderWidth: 1, borderColor: 'black'}}
        onChangeText={val => setInput(val)}
      />
      <Text>{multiplyWith3}</Text>
      <Button onPress={() => setInput2(input2 + 1)} title="Input2 + 1" />
      <Text>Input2: {input2}</Text>
    </View>
  );
};

export default UseMemoExample2;
