import React, { useState } from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {
    responsiveScreenFontSize,
    responsiveScreenHeight,
  } from 'react-native-responsive-dimensions';
import colors from '../../constant/colors';

const DetailsInput = ({type, place, label, value}) => {
    const [input, setInput] = useState(value);
  return (
    <View>
        <Text style={styles.label}>{label}</Text>
        <View style={styles.inputview}>
        <TextInput
          keyboardType={type}
          placeholder={place}
          style={styles.input}
          placeholderTextColor={'gray'}
          value={input}
        />
      </View> 
      <Text style={styles.dottedLine} ellipsizeMode="clip" numberOfLines={1}>
      - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
      - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
      - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
      - - - - - - - - - - - - - - - - -</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    label: {
      fontSize: responsiveScreenFontSize(2),
      color: colors.fontcolor,
      opacity: 0.5,
      fontWeight: '500',
      marginTop: responsiveScreenHeight(2),
      fontFamily: 'Poppins-Regular ',
    },
    inputview: {
        width: '100%',
        height: responsiveScreenHeight(6),
    },
    input: {
        fontSize: responsiveScreenFontSize(2),
        width: '100%',
        height: '80%',
        fontFamily: 'Poppins-Regular',
        padding: 0,
        margin: 0,
    },
    dottedLine: {
        color: '#d9d9d9',
        marginTop: -10,
    }
})
export default DetailsInput 