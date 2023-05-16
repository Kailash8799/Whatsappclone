import React, { useRef, useState } from "react";
import { StyleSheet, Text, View, Alert, Pressable } from "react-native";
import PhoneInput from "react-native-phone-number-input";
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";
import { firebaseConfig } from "../../firebase";
import firebase from "firebase/compat";

const Login = ({ navigation }) => {
  const recaptchaver = useRef(null);
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const phoneInput = React.useRef(null);

  const OnPress = () => {
    if (phoneNumber.length !== 0) {
      const phonePro = new firebase.auth.PhoneAuthProvider();
      phonePro
        .verifyPhoneNumber(phoneNumber, recaptchaver.current)
        .then(code=>{
            navigation.navigate("OTP",{code});
        });
        setPhoneNumber('')
        
    }
  };

  return (
    <View style={styles.container}>
        <FirebaseRecaptchaVerifierModal firebaseConfig={firebaseConfig} ref={recaptchaver}/>
      <PhoneInput
        ref={phoneInput}
        defaultValue={phoneNumber}
        containerStyle={styles.phoneContainer}
        textContainerStyle={styles.textInput}
        onChangeFormattedText={(text) => {
          setPhoneNumber(text);
        }}
        defaultCode="IN"
        layout="first"
        withShadow
        autoFocus
      />
      <Pressable
        style={[styles.button]}
        onPress={() => OnPress()}
        android_ripple="red"
      >
        <Text style={styles.text}>Send OTP</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  phoneContainer: {
    width: "75%",
    height: 50,
  },
  button: {
    marginTop: 30,
    width: "75%",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#18d4d4",
  },
  textInput: {
    paddingVertical: 0,
  },
  text: {
    color: "white",
    fontWeight: "600",
  },
});

export default Login;
