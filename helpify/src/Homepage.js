import React, {useState, useEffect} from 'react';
import {
  View,
  Button,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';
import {SvgXml} from 'react-native-svg';
import BagIcon from './BagIcon';
import Wishlist from './Wishlist';
import BioPage from './BioPage';
import {TEAM} from './store/EntryReducer';
import {useDispatch} from 'react-redux';
const Homepage = ({navigation}) => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get('https://create.blinkapi.io/api/eSphKNzwb9EJBt6GBjKx7Q')
      .then(response => {
        console.log('respon', response);
        setData(response?.data);
      })
      .catch(err => {
        console.log('err is', err);
      });
  }, []);

  const BioPage = item => {
    dispatch(TEAM({currentData: item}));
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
        {/* <SvgXml xml={BagIcon} /> */}
        {/* <SvgXml xml={Wishlist} width={100} height={100}/> */}
      </View>
    </TouchableOpacity>
  );
  return (
    <View style={{backgroundColor: '#fff', minHeight: '100%'}}>
      <Text>Welcome to Helpify</Text>

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <Button
        style={{}}
        mode="text"
        contentStyle={{}}
        onPress={() => {}}
        title={'Continue as a customer'}></Button>
    </View>
  );
};

export default Homepage;
