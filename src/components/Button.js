import React from 'react';
import { Button } from 'react-native';

export default (props) => {
  function execute() {
    console.warn('Exec1!!!');
  }

  return (
    <>
      <Button title="Executar #01!" onPress={execute} />
      <Button
        title="Executar #02!"
        onPress={function execute2() {
          console.warn('Exec2!!!');
        }}
      />
      <Button
        title="Executar #03!"
        onPress={() => {
          console.warn('Exec3!!!');
        }}
      />
    </>
  );
};
