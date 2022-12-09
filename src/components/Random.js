import React from 'react';
import { Text } from 'react-native';
import Style from '../style';

export default ({ min, max }) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const random = Math.floor(Math.random() * (max - min) + min);
  return <Text style={Style.fontLarge}>Seu número aleatório é {random}</Text>;
};
