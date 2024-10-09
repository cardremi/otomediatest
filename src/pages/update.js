import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  useWindowDimensions,
  Modal,
  Alert,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {deleteContact, updateContact} from '../config/contactslice';
import {useDispatch} from 'react-redux';

const UpdateDetail = props => {
  const {id, email, name} = props.route.params.listData;
  const [input1, setInput1] = useState(email);
  const [input2, setInput2] = useState(name);
  const [modalVisible, setModalVisible] = useState(false);
  const {width} = useWindowDimensions();
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const btnUpdate = () => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (input2.length === 0) Alert.alert('Gagal', 'Nama tidak boleh kosong!');
    if (!regex.test(input1)) Alert.alert('Gagal', 'Masukkan email yang valid!');
    if (regex.test(input1) && input2.length !== 0) {
      const updatedContact = {id, email: input1, name: input2};
      dispatch(updateContact(updatedContact));
      navigation.navigate('Home');
    }
  };

  const btnDelete = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    navigation.navigate('Home');
  };

  const handleDeleteContact = () => {
    dispatch(deleteContact(id));
    closeModal();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.goBack()}>
          <Ionicons name={'caret-back'} size={24} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Update Contacts</Text>
        <TouchableOpacity style={styles.button} onPress={btnUpdate}>
          <Feather name={'user-check'} size={24} color={'green'} />
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
      <View style={styles.footer}>
        <TouchableOpacity style={styles.button} onPress={btnDelete}>
          <Text style={styles.buttonText}>Delete Contact</Text>
        </TouchableOpacity>
      </View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={[styles.headerModal, {width: width / 1.2}]}>
              <Text style={[styles.headerText, {fontWeight: '400'}]}>
                Are you sure delete this account ?
              </Text>
              <View style={styles.footerModal}>
                <TouchableOpacity onPress={() => setModalVisible(false)}>
                  <Text style={[styles.closeButton, {paddingRight: 3}]}>
                    No
                  </Text>
                </TouchableOpacity>
                <View style={{padding: 8}} />
                <TouchableOpacity onPress={handleDeleteContact}>
                  <Text style={styles.closeButton}>Yes</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default UpdateDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 18,
    backgroundColor: 'white',
  },
  tinyLogo: {
    alignSelf: 'center',
    margin: 12,
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
    alignSelf: 'center',
  },
  closeButton: {
    fontSize: 20,
    color: 'black',
    fontWeight: '500',
    padding: 8,
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
  footer: {
    alignItems: 'center',
    marginTop: 20,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    color: '#e53935',
    fontSize: 16,
    marginLeft: 5,
    fontWeight: '500',
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
  headerModal: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
  },
  footerModal: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
