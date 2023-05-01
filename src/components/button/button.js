import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {
  responsiveScreenFontSize,
  responsiveScreenHeight,
} from 'react-native-responsive-dimensions';
import colors from '../../constant/colors';

const Button = ({back, text, color, border, onclick}) => {
  return (
    <TouchableOpacity
      onPress={() => onclick()}
      style={[styles.btn, {backgroundColor: back, borderColor: border}]}>
      <Text style={[styles.btntxt, {color: color}]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    width: '100%',
    height: responsiveScreenHeight(6),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    borderColor: '#fff',
    borderWidth: 1,
    marginTop: responsiveScreenFontSize(3),
  },
  btntxt: {
    fontSize: responsiveScreenFontSize(2),
    fontFamily: 'Poppins-Regular ',
  },
});

export {Button};
