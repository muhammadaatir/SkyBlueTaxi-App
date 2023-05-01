import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import colors from '../../constant/colors';
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from 'react-native-responsive-dimensions';
import {Button2} from '../button2/Button2';

const Ticket = ({num, item, color, iconback}) => {
  return (
    <View>
      <Text style={styles.time}>
        {item.day} {item.date} {item.quantity}
      </Text>
      <View style={styles.details}>
        {num == 2 && (
          <View
            style={{
              width: '100%',
              backgroundColor: '#F05D6D',
              height: responsiveScreenHeight(6.8),
              justifyContent: 'center',
            }}>
            <View
              style={{
                width: '90%',
                alignSelf: 'center',
              }}>
              <Text
                style={{
                  fontSize: responsiveScreenFontSize(2),
                  fontWeight: '600',
                  color: '#fff',
                }}>
                {item.type} {item.canceldate}
              </Text>
            </View>
          </View>
        )}
        <View style={{width: '90%', alignSelf: 'center'}}>
          <View style={styles.ticketcode}>
            <Text style={[styles.code, {color: color}]}>{item.date}</Text>
            <Text style={[styles.code, {color: color}]}>{item.code}</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: responsiveScreenHeight(1.6),
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                alignSelf: 'flex-start',
              }}>
              <Image
                source={require('../../assests/images/circle.png')}
                style={styles.icons}
              />
              <Text style={[styles.texts, {color: color}]}>{item.time}</Text>
            </View>
            <View>
              <Text style={[styles.boldtext, {color: color}]}>
                {item.location1firstname}
              </Text>
              <Text
                style={[styles.boldtext, {fontWeight: '600', color: color}]}>
                {item.location1secondname}
              </Text>
            </View>
          </View>

          <Image
            source={require('../../assests/images/line.png')}
            style={{
              height: 52,
              marginTop: responsiveScreenHeight(-2.7),
              marginLeft: responsiveScreenWidth(1.8),
            }}
          />

          <View
            style={{
              flexDirection: 'row',
              marginTop: responsiveScreenHeight(0),
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                alignSelf: 'flex-start',
              }}>
              <Image
                source={require('../../assests/images/pin.png')}
                style={[styles.icons, {height: responsiveScreenHeight(2.2)}]}
              />
              <Text style={[styles.texts, {color: color}]}>{item.time2}</Text>
            </View>
            <View>
              <Text style={[styles.boldtext, {color: color}]}>
                {item.location2firstname}
              </Text>
              <Text
                style={[styles.boldtext, {fontWeight: '600', color: color}]}>
                {item.location2secondname}
              </Text>
            </View>
          </View>
          {num == 0 && (
            <Button2 back={'#536EF9'} color={'#fff'} text={'Taxibus'} />
          )}

          <View style={styles.line}></View>

          <View
            style={{
              flexDirection: 'row',
              marginTop: responsiveScreenHeight(1.6),
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                source={require('../../assests/images/map.png')}
                style={styles.icons}
              />
              <Text style={[styles.texts, styles.newtxt, {color: color}]}>
                {item.distance}
              </Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              marginTop: responsiveScreenHeight(1.6),
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                source={require('../../assests/images/user.png')}
                style={[styles.icons, {height: responsiveScreenHeight(2.4)}]}
              />
              <Text style={[styles.texts, styles.newtxt, {color: color}]}>
                {item.pessanger}
              </Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              marginTop: responsiveScreenHeight(1.6),
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                source={require('../../assests/images/bag.png')}
                style={[styles.icons, {height: responsiveScreenHeight(2.2)}]}
              />
              <Text style={[styles.texts, styles.newtxt, {color: color}]}>
                {item.bag}
              </Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              marginTop: responsiveScreenHeight(1.6),
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                source={require('../../assests/images/comments.png')}
                style={[styles.icons, {height: responsiveScreenHeight(2.2)}]}
              />
              <Text style={[styles.texts, styles.newtxt, {color: color}]}>
                {item.comment}
              </Text>
            </View>
          </View>
          {num == 0 && (
            <>
              <View style={styles.line}></View>

              <View
                style={{
                  flexDirection: 'row',
                  marginTop: responsiveScreenHeight(1.6),
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <View style={styles.iconback}>
                    <Image
                      source={require('../../assests/images/map.png')}
                      style={[
                        styles.icons,
                        {
                          width: responsiveScreenWidth(2.8),
                          height: responsiveScreenHeight(1.8),
                        },
                      ]}
                    />
                  </View>
                  <Text style={[styles.texts, styles.newtxt]}>
                    {item.distance2}
                  </Text>
                </View>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  marginTop: responsiveScreenHeight(1.6),
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <View style={styles.iconback}>
                    <Image
                      source={require('../../assests/images/phone.png')}
                      style={[
                        styles.icons,
                        {
                          width: responsiveScreenWidth(2.8),
                          height: responsiveScreenHeight(1.5),
                        },
                      ]}
                    />
                  </View>
                  <Text style={[styles.texts, styles.newtxt]}>
                    {item.phone}
                  </Text>
                </View>
              </View>
            </>
          )}
        </View>

        <View style={styles.bottom}>
          <View style={styles.bottominnerview}>
            <Text style={styles.price}>€ {item.price}</Text>
            <View style={[styles.iconview, {backgroundColor: iconback}]}>
              <Image
                source={require('../../assests/images/arrow.png')}
                style={[
                  styles.icons,
                  {
                    width: responsiveScreenWidth(3.4),
                    height: responsiveScreenHeight(1.5),
                  },
                ]}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  time: {
    fontSize: responsiveScreenFontSize(2.5),
    color: colors.fontcolor,
    fontWeight: '600',
    marginTop: responsiveScreenHeight(2),
  },
  details: {
    width: '100%',
    backgroundColor: '#fff',
    // height: responsiveScreenHeight(70.8),
    borderRadius: 4,
    elevation: 3,
    marginTop: responsiveScreenHeight(2),
    marginBottom: 20,
  },
  ticketcode: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  code: {
    fontSize: responsiveScreenFontSize(1.8),
    color: colors.fontcolor,
    fontWeight: '400',
    marginTop: responsiveScreenHeight(2),
  },
  icons: {
    width: responsiveScreenWidth(4.5),
    height: responsiveScreenHeight(2.2),
    // padding: 2
  },
  texts: {
    color: colors.fontcolor,
    paddingLeft: responsiveScreenWidth(3.4),
    paddingRight: responsiveScreenWidth(2),
    fontSize: responsiveScreenFontSize(1.8),
    fontWeight: '400',
  },
  newtxt: {width: '90%', textAlign: 'auto'},
  boldtext: {
    color: colors.fontcolor,
    fontSize: responsiveScreenFontSize(2),
    fontWeight: '400',
  },
  line: {
    width: '100%',
    borderBottomWidth: 2,
    borderBottomColor: '#000',
    opacity: 0.2,
    borderStyle: 'dashed',
    marginTop: responsiveScreenHeight(2),
  },
  iconback: {
    height: responsiveScreenHeight(2.3),
    width: responsiveScreenWidth(5),
    backgroundColor: '#e4d2f6',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: responsiveScreenWidth(5),
  },
  bottom: {
    width: '100%',
    height: responsiveScreenHeight(9.4),
    backgroundColor: '#F6F6F6',
    // position: 'absolute',
    // bottom: 0,
    justifyContent: 'center',
    marginTop: responsiveScreenHeight(2.5),
  },
  bottominnerview: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%',
    alignSelf: 'center',
  },
  price: {
    fontSize: responsiveScreenFontSize(2.4),
    color: colors.fontcolor,
    fontWeight: '600',
  },
  iconview: {
    height: responsiveScreenHeight(3.3),
    width: responsiveScreenWidth(7),
    borderRadius: responsiveScreenWidth(7),
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export {Ticket};
