import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { DateStyle, DateFormatter } from 'react-native-localize-date';

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
  const defaultLocale = 'en';
  const supportedLocales = ['en', 'fr', 'de'];
  const formatterShort = new DateFormatter(defaultLocale, supportedLocales, DateStyle.SHORT, DateStyle.SHORT);
  const formatterMedium = new DateFormatter(defaultLocale, supportedLocales, DateStyle.MEDIUM, DateStyle.MEDIUM);
  const formatterLong = new DateFormatter(defaultLocale, supportedLocales, DateStyle.LONG, DateStyle.LONG);
  const formatterFull = new DateFormatter(defaultLocale, supportedLocales, DateStyle.FULL, DateStyle.FULL);
  const formatterDateOnly = new DateFormatter(defaultLocale, supportedLocales, DateStyle.FULL, DateStyle.NONE);
  const formatterTimeOnly = new DateFormatter(defaultLocale, supportedLocales, DateStyle.NONE, DateStyle.FULL);

  return (
    <SafeAreaView>
      <View style={styles.wrapper} >
        <ExampleRow code="SHORT" output={formatterShort.format(date)} />
        <ExampleRow code="MEDIUM" output={formatterMedium.format(date)} />
        <ExampleRow code="LONG" output={formatterLong.format(date)} />
        <ExampleRow code="FULL" output={formatterFull.format(date)} />
        <ExampleRow code="Date Only" output={formatterDateOnly.format(date)} />
        <ExampleRow code="Time Only" output={formatterTimeOnly.format(date)} />
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
