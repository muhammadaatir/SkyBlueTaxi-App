import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  ImageBackground,
  Text,
} from 'react-native';
import {
  responsiveFontSize,
  responsiveScreenFontSize,
  responsiveScreenHeight,
} from 'react-native-responsive-dimensions';
import {Button} from '../../../components';
import colors from '../../../constant/colors';
import images from '../../../constant/images';

const Splash = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ImageBackground
        source={images.background}
        resizeMode="cover"
        style={styles.backimage}>
        <View style={{width: '80%', alignSelf: 'center'}}>
          <View style={styles.txtview}>
            <Text style={styles.txt1}>Welcome</Text>
            <Text style={styles.txt2}>Manage your rides</Text>
            <Text style={styles.txt3}>Seamless and intuitive</Text>
          </View>
          <View>
            <Button
              back="#fff"
              color={colors.fontcolor}
              text="Sign in with Google"
            />
            <Button color="#fff" text="Create an account" />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Text style={[styles.txt4, {opacity: 0.4, paddingRight: 5}]}>
              Do you already have an account?
            </Text>
            <Text
              onPress={() => navigation.navigate('Login')}
              style={styles.txt4}>
              Sign in
            </Text>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backimage: {
    width: '100%',
    height: '100%',
  },
  txtview: {
    marginTop: responsiveScreenHeight(40),
  },
  txt1: {
    color: 'white',
    fontSize: responsiveFontSize(4),
    marginTop: responsiveScreenHeight(2.6),
    fontWeight: '700',
    fontFamily: 'Poppins-Bold',
  },
  txt2: {
    color: '#ffff',
    fontSize: responsiveScreenFontSize(2.9),
    fontWeight: '400',
    marginTop: responsiveScreenHeight(3),
    fontFamily: 'Poppins-Regular',
  },
  txt3: {
    color: '#ffff',
    fontSize: responsiveScreenFontSize(2.9),
    marginTop: responsiveScreenHeight(0.6),
    fontFamily: 'Poppins-Bold ',
    fontWeight: '700',
  },
  txt4: {
    color: '#fff',
    fontSize: responsiveScreenFontSize(1.9),
    // fontFamily: 'Poppins-ExtraBold ',
    fontFamily: 'Poppins-ThinItalic ',

    fontWeight: '600',
    marginTop: responsiveScreenHeight(2.4),
  },
});

export default Splash;
