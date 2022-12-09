import React from 'react';
import { View, StyleSheet } from 'react-native';

// import Comp, { Comp2, Comp3 } from './components/Multi';
// import First from './components/First';
import MinMax from './components/MinMax';
import Random from './components/Random';

export default () => {
  return (
    <View style={style.App}>
      {/* Passando String */}
      {/* <MinMax min="3" max="30" /> */}
      {/* Passando Number */}
      {/* <MinMax min={10} max={100} /> */}
      <Random min={10} max={100} />
      {/* <Comp />
      <Comp2 />
      <Comp3 />
      <First /> */}
    </View>
  );
};

const style = StyleSheet.create({
  App: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});
