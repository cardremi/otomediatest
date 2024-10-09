import React, {useState, useEffect} from 'react';
import {
  FlatList,
  RefreshControl,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import CardCategory from '../components/cardcategory';
import FloatingButton from '../components/floatingButton';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {getContacts} from '../config/selectors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Home = () => {
  const [refreshing, setRefreshing] = useState(false);
  const {height} = useWindowDimensions();
  const navigation = useNavigation();
  const contacts = useSelector(getContacts);
  const [dataContacts, setDataContacts] = useState([]);

  useEffect(() => {
    const sortedData = [...contacts].sort((a, b) =>
      a.email.localeCompare(b.email),
    );
    setDataContacts(sortedData); // Mengupdate state dengan data yang sudah diurutkan
  }, [contacts]);

  const handleCardPress = item => {
    navigation.navigate('UpdateDetail', {listData: item});
  };

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  };

  const ListEmptyComponent = () => (
    <View style={[styles.emptyList, {height: height / 1.2}]}>
      <MaterialCommunityIcons name={'playlist-remove'} size={50} />
      <Text style={styles.titleEmpty}>Empty Contact</Text>
    </View>
  );

  return (
    <View style={styles.scrollView}>
      <Text style={styles.titlename}>Contacts</Text>
      <FlatList
        data={dataContacts}
        renderItem={({item}) => (
          <CardCategory
            style={styles.titlename}
            data={item}
            onPress={() => handleCardPress(item)}
          />
        )}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(_, index) => index.toString()}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={['transparent']}
            style={{backgroundColor: 'transparent'}}
            progressBackgroundColor="transparent"
          />
        }
        ListEmptyComponent={ListEmptyComponent}
        style={{width: '100%'}}
      />
      <FloatingButton
        onPress={() => navigation.navigate('CreateContact')}
        testID={'floating-button'}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  scrollView: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    flex: 1,
  },
  titlename: {
    color: 'black',
    fontWeight: '500',
    fontSize: 24,
    marginTop: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    alignItems: 'center',
    elevation: 5,
  },
  closeButton: {
    fontSize: 16,
    color: 'black',
    fontWeight: '700',
  },
  titleEmpty: {
    color: 'black',
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'left',
    paddingLeft: 8,
  },
  headerModal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    backgroundColor: 'white',
  },
  emptyList: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
