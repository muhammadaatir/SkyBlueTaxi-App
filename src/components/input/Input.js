import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {
  responsiveScreenFontSize,
  responsiveScreenHeight,
} from 'react-native-responsive-dimensions';
import colors from '../../constant/colors';
const Input = ({type, place, secure, label}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputview}>
        <TextInput
          keyboardType={type}
          placeholder={place}
          secureTextEntry={secure}
          style={styles.input}
          placeholderTextColor={'gray'}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  label: {
    fontSize: responsiveScreenFontSize(1.8),
    color: colors.fontcolor,
    opacity: 0.5,
    fontWeight: '500',
    marginTop: responsiveScreenHeight(2),
    fontFamily: 'Poppins-Regular ',
  },
  inputview: {
    width: '100%',
    backgroundColor: '#E0E0E033',
    height: responsiveScreenHeight(6),
    marginTop: responsiveScreenHeight(2.5),
    borderRadius: 6,
  },
  input: {
    fontSize: responsiveScreenFontSize(2),
    width: '100%',
    height: '100%',
    fontFamily: 'Poppins-Regular ',
  },
});
export {Input};
