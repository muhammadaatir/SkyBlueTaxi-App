import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {
  responsiveScreenFontSize,
  responsiveScreenHeight,
} from 'react-native-responsive-dimensions';
import colors from '../../constant/colors';
import ToggleButton from '../toggleButton/ToggleButton';

const ToggleOption = ({type, place, label, value}) => {
  const [text, setText] = useState(value);
  return (
    <View>
      <View style={styles.labelParent}>
        <Text style={styles.label}>{label}</Text>
        <ToggleButton />
      </View>
      <View style={styles.optionview}>
        <Text>{text}</Text>
      </View>
      <Text style={styles.dottedLine} ellipsizeMode="clip" numberOfLines={1}>
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - - - - - - - - - - - - - - - -
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  labelParent: {
    marginTop: responsiveScreenHeight(2),
    fontFamily: 'Poppins-Regular',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  label: {
    fontSize: responsiveScreenFontSize(2),
    color: colors.fontcolor,
    fontWeight: '500',
  },
  optionview: {
    width: '100%',
    marginBottom: 20,
  },
  dottedLine: {
    color: '#d9d9d9',
    marginTop: -10,
  },
});
export default ToggleOption;
