import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  ImageBackground,
  StyleSheet,
  Text,
  ScrollView,
  Image,
} from 'react-native';
import {
  responsiveFontSize,
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import {Button2, Ticket} from '../../../components';
import colors from '../../../constant/colors';
import images from '../../../constant/images';
import {canceled, driven, todrive} from '../../../constant/object/object';
const Rides = ({navigation}) => {
  const [btn1, setBtn1] = useState(0);

  return (
    <ScrollView>
      <SafeAreaView style={{flex: 1}}>
        <ImageBackground
          source={images.background}
          resizeMode="cover"
          style={styles.backimage}>
          <View style={[styles.topview, {flex: 0.2}]}>
            <Text style={styles.loginheading}>Rides</Text>
          </View>
          <View style={styles.endview}>
            <View style={{alignSelf: 'center', width: '90%'}}>
              <View style={{flexDirection: 'row'}}>
                <Button2
                  back={btn1 == 0 ? colors.fontcolor : '#e4d2f6'}
                  color={btn1 == 0 ? '#fff' : colors.fontcolor}
                  text={'To drive'}
                  onclick={() => setBtn1(0)}
                />
                <Button2
                  back={btn1 == 1 ? colors.fontcolor : '#e4d2f6'}
                  color={btn1 == 1 ? '#fff' : colors.fontcolor}
                  text={'Driven'}
                  onclick={() => setBtn1(1)}
                />
                <Button2
                  back={btn1 == 2 ? colors.fontcolor : '#e4d2f6'}
                  color={btn1 == 2 ? '#fff' : colors.fontcolor}
                  text={'Cancelled'}
                  onclick={() => setBtn1(2)}
                />
              </View>
              {btn1 == 0 ? (
                <Ticket
                  item={todrive}
                  num={btn1}
                  iconback={colors.fontcolor}
                  color={colors.fontcolor}
                />
              ) : btn1 == 1 ? (
                <Ticket
                  item={driven}
                  iconback={colors.iconbackcolor}
                  color={colors.lightfontcolor}
                />
              ) : btn1 == 2 ? (
                <Ticket
                  item={canceled}
                  num={btn1}
                  iconback={colors.iconbackcolor}
                  color={colors.lightfontcolor}
                />
              ) : null}
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
    backgroundColor: colors.backgroundcolor,
  },
  loginheading: {
    fontSize: responsiveScreenFontSize(4),
    color: '#fff',
    fontWeight: '700',
    marginTop: responsiveScreenHeight(8),
    fontFamily: 'Poppins-Bold ',
  },
});

export default Rides;
