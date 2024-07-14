import React, {useMemo} from 'react';
import {SafeAreaView, Text} from 'react-native';

interface Props {
  value: any;
}

const UseMemoExample1 = React.memo((props: Props) => {
  const memorizedDifference = useMemo(() => {
    return 3 * props.value;
  }, [props.value]);
  console.log(
    '🚀 ~ memorizedDifference ~ memorizedDifference:',
    memorizedDifference,
  );

  return (
    <SafeAreaView>
      <Text>Memoriezed Difference: {memorizedDifference}</Text>
    </SafeAreaView>
  );
});

export default UseMemoExample1;
