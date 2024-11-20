import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { DateStyle, localizeDateTime } from 'react-native-localize-date';

type ExampleRowProps = {
  code: string
  output: string
};

const ExampleRow = (props: ExampleRowProps) => {
  return (
    <Text style={styles.exampleRow}><Text style={styles.code} >{props.code}</Text>{'\n'}{props.output}{'\n'}</Text>
  );
};

function App(): React.JSX.Element {
  const date = new Date();

  return (
    <SafeAreaView>
      <View style={styles.wrapper} >
        <ExampleRow code="SHORT" output={localizeDateTime(date, DateStyle.SHORT, DateStyle.SHORT)} />
        <ExampleRow code="MEDIUM" output={localizeDateTime(date, DateStyle.MEDIUM, DateStyle.MEDIUM)} />
        <ExampleRow code="LONG" output={localizeDateTime(date, DateStyle.LONG, DateStyle.LONG)} />
        <ExampleRow code="FULL" output={localizeDateTime(date, DateStyle.FULL, DateStyle.FULL)} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 20,
  },
  exampleRow: {
    fontSize: 18,
    fontWeight: '400',
  },
  code: {
    fontWeight: '600',
  },
});

export default App;
