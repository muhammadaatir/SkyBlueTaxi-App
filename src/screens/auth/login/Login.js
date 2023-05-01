import React from 'react';
import {
  SafeAreaView,
  View,
  ImageBackground,
  StyleSheet,
  Text,
} from 'react-native';
import {
  responsiveFontSize,
  responsiveScreenFontSize,
  responsiveScreenHeight,
} from 'react-native-responsive-dimensions';
import {Button, Input} from '../../../components';
import colors from '../../../constant/colors';
import images from '../../../constant/images';
import AntDesign from 'react-native-vector-icons/AntDesign';
const Login = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ImageBackground
        source={images.background}
        resizeMode="cover"
        style={styles.backimage}>
        <View style={styles.topview}>
          <Text style={styles.loginheading}>Login</Text>
        </View>
        <View style={styles.endview}>
          <View style={{width: '90%', alignSelf: 'center'}}>
            <Text style={styles.txt1}>Welcome Back</Text>
            <Text style={styles.txt2}>Hi there, sign in to continue</Text>
            <View style={{marginTop: responsiveScreenHeight(2)}}>
              <Input
                place={'Enter your username or email'}
                label={'Username or email'}
                secure={false}
              />
              <Input
                place={'Enter your password'}
                label={'Password'}
                secure={true}
              />
            </View>
            <Text style={styles.forgot}>Forgot Password?</Text>

            <Button
              border={colors.fontcolor}
              back="#E0E0E033"
              color={colors.fontcolor}
              text="Sign in "
              onclick={() => navigation.navigate('Mytab', {screen: 'Auction'})}
            />

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
              }}>
              <Text style={[styles.txt4, {opacity: 0.4, paddingRight: 5}]}>
                Do not have an account?
              </Text>
              <Text style={styles.txt4}>Sign up</Text>
            </View>
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
  topview: {
    width: '90%',
    alignSelf: 'center',
    flex: 0.2,
  },
  endview: {
    width: '100%',
    flex: 0.8,
    backgroundColor: '#fff',
    borderTopLeftRadius: 19,
    borderTopRightRadius: 19,
  },
  loginheading: {
    fontSize: responsiveScreenFontSize(4),
    color: '#fff',
    fontWeight: '600',
    marginTop: responsiveScreenHeight(10),
    fontFamily: 'Poppins-Bold ',
  },
  txt1: {
    color: colors.fontcolor,
    fontSize: responsiveScreenFontSize(4),
    fontWeight: '600',
    marginTop: responsiveScreenHeight(3),
  },
  txt2: {
    color: colors.fontcolor,
    fontSize: responsiveScreenFontSize(2),
    opacity: 0.5,
    fontWeight: '500',
  },
  forgot: {
    color: colors.fontcolor,
    fontSize: responsiveScreenFontSize(2),
    fontWeight: '600',
    marginTop: responsiveScreenHeight(2),
    marginBottom: responsiveScreenHeight(1),
  },
  txt4: {
    color: colors.fontcolor,
    fontSize: responsiveScreenFontSize(1.9),
    fontWeight: '600',
    marginTop: responsiveScreenHeight(9),
  },
});

export default Login;
