import React, { useState } from 'react';
import { Text, Button, View } from 'react-native';
import Style from '../style';

export default ({ initial = 0, step = 1 }) => {
  const [number, setNumber] = useState(initial);

  const add = () => setNumber(number + step);
  const sub = () => setNumber(number - step);
  return (
    <>
      <Text style={Style.fontLarge}>{number}</Text>
      <View style={Style.inline}>
        <Button title="+" onPress={add} />
        <Button title="-" onPress={sub} />
      </View>
    </>
  );
};
