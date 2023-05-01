import {View, Text, ScrollView, StyleSheet, ImageBackground} from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import images from '../../../constant/images';
import {
  responsiveFontSize,
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import DetailsInput from '../../../components/detailsInput/DetailsInput';
import Entypo from 'react-native-vector-icons/Entypo';

const Setting = ({navigation}) => {
  return (
    <ScrollView>
      <SafeAreaView style={{flex: 1}}>
        <ImageBackground
          source={images.background}
          resizeMode="cover"
          style={styles.backimage}>
          <View style={[styles.topview, {flex: 0.2}]}>
            <Text onPress={() => navigation.navigate('Transportation')}>
              <Entypo style={styles.backIcon} name={'chevron-thin-left'} />
            </Text>
            <Text style={styles.mainheading}> Contact Details</Text>
          </View>
          <View style={styles.endview}>
            <View style={{alignSelf: 'center', width: '90%'}}>
              <View>
                <Text style={styles.subHeading}>Company Data</Text>
                <DetailsInput label={'Company Name'} value={'Carnisse Taxicentrale'}/>
                <DetailsInput label={'Name'} value={'Saeed Akmal'}/>
                <DetailsInput label={'Phone Number'} value={'0655742957'}/>
                <DetailsInput label={'Email'} value={'info@easytaxischiphol.nl'}/>
              </View>
              <View>
                <Text style={styles.subHeading}>Payment Details</Text>
                <DetailsInput label={'Name of Account Holder'} value={'Saeed Akmal'}/>
                <DetailsInput label={'Bank Account Number'} value={'NL80INGB0005375775'}/>
              </View> 
            </View>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </ScrollView>
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
  },
  endview: {
    width: '100%',
    flex: 0.8,
    backgroundColor: '#fff',
  },
  mainheading: {
    fontSize: responsiveScreenFontSize(4),
    color: '#fff',
    fontWeight: '700',
    marginTop: responsiveScreenHeight(8),
    fontFamily: 'Poppins-Bold ',
  },
  subHeading: {
    color: '#5F259D',
    fontFamily: 'Poppins-Bold',
    fontWeight: '700',
    fontSize: responsiveScreenFontSize(2),
    paddingTop: 10,
  },
  backIcon: {
    fontSize: responsiveScreenFontSize(4),
    marginEnd: 10,
    color: '#fff'
  }
});

export default Setting;
