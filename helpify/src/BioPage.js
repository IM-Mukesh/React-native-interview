import React from 'react';
import {
  View,
  Button,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useSelector} from 'react-redux';
const BioPage = ({navigation}) => {
  const item = useSelector(state => state?.team?.currentData);
  console.log('item is', item);
  console.log('nv', navigation);
  return (
    <View
      style={{
        backgroundColor: '#56D1A7',
        width: 280,
        height: 177,
        marginVertical: 12,
        marginLeft: 32,
        borderRadius: 12,
        padding: 24,
      }}>
      <Text style={{color: '#002140', fontSize: 14, fontWeight: '600'}}>
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
          {'$' + item.price}
        </Text>
        {/* <SvgXml xml={BagIcon} /> */}
        {/* <SvgXml xml={Wishlist} width={100} height={100}/> */}
      </View>
    </View>
  );
};

export default BioPage;
