import React from 'react';
import {
  View,
  Text,
  Image,
} from 'react-native';
import {useRoute} from '@react-navigation/native';
const BioPage = ({navigation}) => {
  console.log('item is');
  console.log('nv', navigation);
  const route = useRoute();
  const item = route?.params?.item;
  return (
    <>
      <View
        style={{
          backgroundColor: '#56D1A7',
          width: 280,
          marginTop: 50,
          marginLeft: 32,
          borderRadius: 12,
          padding: 24,
        }}>
        <Text style={{color: '#002140', fontSize: 12, fontWeight: '600'}}>
          {item?.category}
        </Text>
        <Text
          style={{
            color: '#002140',
            fontSize: 32,
            marginTop: 16,
            fontWeight: '700',
          }}>
          {item?.name}
        </Text>
        <Image
          source={{uri: item?.image}}
          style={{
            width: 119,
            height: 172,
            position: 'absolute',
            right: -57,
            top: -30,
          }}
        />

        <View style={{}}>
          <Text style={{color: '#002140', fontSize: 18, fontWeight: '600'}}>
            {'price'}
          </Text>
          <Text style={{color: '#002140', fontSize: 18, fontWeight: '600'}}>
            {'$' + item.price}
          </Text>
        </View>
      </View>
      <View style={{padding: 32}}>
        <Text style={{color: '#002140', fontSize: 18, fontWeight: '600'}}>
          {'Plant Bio'}
        </Text>

        <Text
          style={{
            color: '#002140',
            fontSize: 15,
            fontWeight: '400',
            marginTop: 14,
          }}>
          {item?.bio}
        </Text>
      </View>
    </>
  );
};

export default BioPage;
