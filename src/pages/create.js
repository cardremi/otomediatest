import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useDispatch} from 'react-redux';
import {createContact} from '../config/contactslice';
import uuid from 'react-native-uuid';

const CreateContact = () => {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const btnCreate = () => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const uniqueId = uuid.v4();

    if (input2.length === 0) Alert.alert('Gagal', 'Nama tidak boleh kosong!');
    if (!regex.test(input1)) Alert.alert('Gagal', 'Masukkan email yang valid!');
    if (regex.test(input1) && input2.length !== 0) {
      const newContact = {
        id: uniqueId,
        email: input1.toLowerCase(),
        name: input2,
      };
      dispatch(createContact(newContact));
      navigation.navigate('Home');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.goBack()}>
          <Ionicons name={'caret-back'} size={24} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Create Contacts</Text>
        <TouchableOpacity style={styles.button} onPress={btnCreate}>
          <AntDesign name={'adduser'} size={24} color={'green'} />
        </TouchableOpacity>
      </View>
      <View style={styles.inputContainer}>
        <Ionicons
          name={'person-circle-outline'}
          size={80}
          style={styles.tinyLogo}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={input1}
          onChangeText={setInput1}
        />
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={input2}
          onChangeText={setInput2}
        />
      </View>
    </View>
  );
};

export default CreateContact;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 18,
    backgroundColor: 'white',
  },
  tinyLogo: {
    alignSelf: 'center',
    marginBottom: 12,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: '500',
    color: 'black',
  },
  inputContainer: {
    padding: 20,
  },
  input: {
    height: 60,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    color: 'black',
    fontWeight: '500',
    paddingLeft: 30,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
});
