import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';
const Homepage = ({navigation}) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get('https://create.blinkapi.io/api/eSphKNzwb9EJBt6GBjKx7Q')
      .then(response => {
        setData(response?.data);
      })
      .catch(err => {
        console.log('err is', err);
      });
  }, []);

  const BioPage = item => {
    navigation.navigate('bio', {item: item});
  };

  const renderItem = ({item, index}) => (
    <TouchableOpacity
      onPress={() => {
        BioPage(item);
      }}
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
        {item.category}
      </Text>
      <Text
        style={{
          color: '#002140',
          fontSize: 32,
          marginTop: 16,
          fontWeight: '700',
        }}>
        {item.name}
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
      </View>
    </TouchableOpacity>
  );
  return (
    <View style={{backgroundColor: '#fff', minHeight: '100%'}}>

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Homepage;
