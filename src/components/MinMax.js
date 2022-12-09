import React from 'react';
import { Text } from 'react-native';
import Style from '../style';

export default (params) => {
  const { min, max } = params;
  return (
    <Text style={Style.fontLarge}>
      O valor {min} é maior que o valor {max}
    </Text>
  );
};
