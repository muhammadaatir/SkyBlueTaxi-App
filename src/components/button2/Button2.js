import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';

const Button2 = ({back, text, color, border, onclick}) => {
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
    width: responsiveScreenWidth(19),
    height: responsiveScreenHeight(4.2),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 9,
    marginTop: responsiveScreenHeight(3),
    // opacity: 0.1,
    marginRight: 15,
  },
  btntxt: {
    fontSize: responsiveScreenFontSize(1.8),
    fontFamily: 'Poppins-Regular ',
  },
});

export {Button2};
