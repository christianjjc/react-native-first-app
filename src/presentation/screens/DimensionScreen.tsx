import React from 'react';
import {StyleSheet, View, useWindowDimensions} from 'react-native';
import {Text} from 'react-native-paper';

export const DimensionScreen = () => {
  const {width, height} = useWindowDimensions();
  return (
    <View>
      <View style={styles.container}>
        <View
          style={{
            ...styles.purpleBox,
            width: width * 0.5,
          }}></View>
      </View>
      <Text style={styles.title}>
        w: {width} h:{height}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    width: 300,
    height: 300,
  },
  purpleBox: {
    height: '50%',
    width: '50%',
    backgroundColor: '#5856d6',
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
  },
});
