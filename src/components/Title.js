import React, { Fragment } from 'react';
import { View, Text } from 'react-native';
import style from '../style';

export default (props) => {
  return (
    <Fragment>
      <Text style={style.fontLarge}>{props.main}</Text>
      <Text style={style.fontSmall}>{props.secondary}</Text>
    </Fragment>
  );
};
