import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';

const RegisterScreen = (props) => {
  return (
    <ScrollView style={{ backgroundColor: '#292929', paddingTop: '20%' }}>
      <View style={styles.container}>
        <Image
          style={{
            width: 150,
            height: 16,
            marginBottom: 20,
          }}
          source={{ uri: 'https://i.ibb.co/cvFGrQg/logo.png' }}
        />
        <TextInput style={styles.input} placeholder="Full Name" />
        <TextInput style={styles.input} placeholder="Email" />
        <TextInput style={styles.input} placeholder="Password" secureTextEntry />
        <TextInput style={styles.input} placeholder="Gender" />
        <TextInput style={styles.input} placeholder="Phone" />
        <TextInput style={styles.input} placeholder="Address" />
        <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('Home')}>
          <Text style={styles.buttontext}>REGISTER</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#292929',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 50,
  },
  input: {
    width: '100%',
    backgroundColor: 'white',
    marginVertical: 10,
    borderRadius: 4,
    height: 45,
    paddingLeft: 10,
  },
  button: {
    width: '100%',
    backgroundColor: '#b545ff',
    marginVertical: 30,
    borderRadius: 4,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttontext: {
    textAlign: 'center',
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
  buttontext1: {
    textAlign: 'center',
    color: 'white',
  },
});

export default RegisterScreen;

// // import { Ionicons } from '@expo/vector-icons';
// // import * as WebBrowser from 'expo-web-browser';
// import React, { useState } from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
//   TextInput,
//   Picker,
//   Button,
//   TouchableHighlight,
//   Alert,
// } from 'react-native';
// // import { RectButton, ScrollView } from 'react-native-gesture-handler';

// export default function RegisterScreen() {
//   const [fullName, setFullName] = useState('');
//   const [email, setEmail] = useState('');
//   const [phone, setPhone] = useState('');
//   const [address, setAddress] = useState('');
//   const [selectedValue, setSelectedValue] = useState('java');

//   return (
//     <View style={{ padding: 10 }}>
//       <TextInput
//         style={styles.textInput}
//         onChangeText={(fullName) => setFullName(fullName)}
//         placeholder="Your Full Name"
//       />
//       <TextInput
//         onChangeText={(email) => setEmail(email)}
//         style={styles.textInput}
//         placeholder="Your Email"
//       />
//       <TextInput
//         onChangeText={(phone) => setPhone(phone)}
//         style={styles.textInput}
//         placeholder="Your Phone Number"
//       />
//       <Picker
//         selectedValue={selectedValue}
//         onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
//         style={styles.picker}
//         itemStyle={{
//           fontSize: 7,
//           borderBottomWidth: 2,
//         }}
//         mode="dropdown"
//       >
//         <Picker.Item color="#b8b8b8" label="Select Your Gender" />
//         <Picker.Item label="Male" value="male" />
//         <Picker.Item label="Female" value="female" />
//       </Picker>
//       <TextInput
//         onChangeText={(address) => setAddress(address)}
//         style={styles.textInput}
//         placeholder="Your Address"
//       />

//       <TouchableHighlight
//         style={{
//           borderRadius: 10,
//           marginTop: 15,
//         }}
//       >
//         <Button
//           onPress={() =>
//             Alert.alert(
//               `Registered`,
//               `${fullName + ' ' + email + ' ' + phone + ' ' + selectedValue + ' ' + address}`
//             )
//           }
//           title="Register"
//           color="#b529b7"
//           accessibilityLabel="Register"
//         />
//       </TouchableHighlight>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fafafa',
//   },
//   textInput: {
//     height: 50,
//     borderBottomWidth: 2,
//     borderColor: '#e0e0e0',
//     marginBottom: 10,
//     paddingHorizontal: 10,
//     backgroundColor: 'white',
//     fontSize: 16,
//   },
//   contentContainer: {
//     paddingTop: 15,
//   },
//   optionIconContainer: {
//     marginRight: 12,
//   },
//   option: {
//     backgroundColor: '#fdfdfd',
//     paddingHorizontal: 15,
//     paddingVertical: 15,
//     borderWidth: StyleSheet.hairlineWidth,
//     borderBottomWidth: 0,
//     borderColor: '#ededed',
//   },
//   lastOption: {
//     borderBottomWidth: StyleSheet.hairlineWidth,
//   },
//   optionText: {
//     fontSize: 15,
//     alignSelf: 'flex-start',
//     marginTop: 1,
//   },
//   picker: {
//     width: '100%',
//     backgroundColor: 'white',
//     marginBottom: 10,
//     height: 50,
//     paddingHorizontal: 10,
//     borderBottomWidth: 2,
//     fontSize: 10,
//   },
// });
