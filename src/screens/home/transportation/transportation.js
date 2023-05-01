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
import ToggleOption from '../../../components/toggleOption/ToggleOption';
import Entypo from 'react-native-vector-icons/Entypo';

const Transportation = ({navigation}) => {
  return (
    <ScrollView>
      <SafeAreaView style={{flex: 1}}>
        <ImageBackground
          source={images.background}
          resizeMode="cover"
          style={styles.backimage}>
          <View style={[styles.topview, {flex: 0.2}]}>
            <Text onPress={() => navigation.navigate('Setting')}>
              <Entypo style={styles.backIcon} name={'chevron-thin-left'} />
            </Text>
            <Text style={styles.mainheading}> Transportation Options</Text>
          </View>
          <View style={styles.endview}>
            <View style={{alignSelf: 'center', width: '90%'}}>
              <View>
                <Text style={styles.subHeading}>Destinations</Text>
                <ToggleOption label={"Airport Transportation"} value={"Rides to and from airports Netherlands, Belgium and Germany."}/>
                <ToggleOption label={"A/B Transport"} value={"Rides to and from every possible location in the Netherlands."}/>
              </View>
              <View>
                <Text style={styles.subHeading}>Kind of Taxi</Text>
                <ToggleOption label={"Speed"} value={"These are rides that are between 6 and 24 hours before the start of the ride, are booked. This applies to a higher rate."}/>
                <ToggleOption label={"Taxibus"} value={"Rides for 5 people or more. A higher rate applies for this. NB! On trips with less people, but a lot of luggage is required you decide whether it fits in your car."}/>
                <ToggleOption label={"Luxury Transportation"} value={"These rides should be performed in a luxury car van younger than 6 years and by a driver in suit. One applies to this higher rate. Look for the luxury list cars on our website."}/>
                <ToggleOption label={"Electric Transport"} value={"Driving an electric car. A higher rate applies for this"}/>
              </View>
              <View>
                <Text style={styles.subHeading}>Extra Options</Text>
                <ToggleOption label={"Sign"} value={"On these rides you serve the passenger with a sign with his or her name on it at the arrivals hall of the airport/the terminal/etcetera. A higher rate applies for this."}/>
                <ToggleOption label={"Baby Chair"} value={"On these rides you need a baby or bring a child seat. Hirevoor a higher rate applies. The size of the seat is used by the passenger passed."}/>
                <ToggleOption label={"High Chair"} value={"On these rides you need a baby or bring a child seat. Hirevoor a higher rate applies. The size of the seat is used by the passenger passed."}/>
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
    fontSize: responsiveScreenFontSize(3),
    color: '#fff',
    fontWeight: '700',
    marginTop: responsiveScreenHeight(8),
    fontFamily: 'Poppins-Bold ',
    width: '100%'
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
    color: '#fff',
  }
});

export default Transportation;
