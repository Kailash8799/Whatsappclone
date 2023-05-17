import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Alert,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import firebase from 'firebase/compat'

const OtpScreen = ({ navigation,route }) => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);
  const ref6 = useRef(null);
  const [f1, setf1] = useState();
  const [f2, setf2] = useState();
  const [f3, setf3] = useState();
  const [f4, setf4] = useState();
  const [f5, setf5] = useState();
  const [f6, setf6] = useState();
  const [timed, settimed] = useState(60);
  const {code} = route.params;
  const resendOtp = () => {
    settimed(60)
  };

  useEffect(() => {
    const interverl = setInterval(() => {
      if (timed > 0) {
        settimed(timed - 1);
      } else {
        clearInterval(interverl);
      }
    }, 1000);

    return () => {
      clearInterval(interverl);
    };
  }, [timed]);

  const verifyOTP = ()=>{
    const codeotp = f1+f2+f3+f4+f5+f6
    const cred = firebase.auth.PhoneAuthProvider.credential(code,codeotp)
    firebase.auth().signInWithCredential(cred).then(()=>{
      setf1('')
      setf2('')
      setf3('')
      setf4('')
      setf5('')
      setf6('')
      navigation.navigate("Home");
    }).catch((err)=>{
      console.log(err);
    })
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ height: 37 }}></View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 100,
        }}
      >
        <Text style={{ fontSize: 24, fontWeight: "800" }}>
          OTP Verification
        </Text>
      </View>
      <View
        style={{
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          marginTop: 100,
        }}
      >
        <TextInput
          ref={ref1}
          value={f1}
          inputMode="numeric"
          keyboardType="number-pad"
          style={[styles.textinput, { borderColor: `${f1 ? "green" : "red"}` }]}
          maxLength={1}
          onChangeText={(txt) => {
            setf1(txt);
            if (txt.length > 0) {
              ref2.current.focus();
            } else {
              ref1.current.focus();
            }
          }}
        />
        <TextInput
          ref={ref2}
          value={f2}
          inputMode="numeric"
          keyboardType="number-pad"
          style={[styles.textinput, { borderColor: `${f2 ? "green" : "red"}` }]}
          maxLength={1}
          onChangeText={(txt) => {
            setf2(txt);
            if (txt.length > 0) {
              ref3.current.focus();
            } else {
              ref1.current.focus();
            }
          }}
        />
        <TextInput
          ref={ref3}
          value={f3}
          inputMode="numeric"
          keyboardType="number-pad"
          style={[styles.textinput, { borderColor: `${f3 ? "green" : "red"}` }]}
          maxLength={1}
          onChangeText={(txt) => {
            setf3(txt);
            if (txt.length > 0) {
              ref4.current.focus();
            } else {
              ref2.current.focus();
            }
          }}
        />
        <TextInput
          ref={ref4}
          value={f4}
          inputMode="numeric"
          keyboardType="number-pad"
          style={[styles.textinput, { borderColor: `${f4 ? "green" : "red"}` }]}
          maxLength={1}
          onChangeText={(txt) => {
            setf4(txt);
            if (txt.length > 0) {
              ref5.current.focus();
            } else {
              ref3.current.focus();
            }
          }}
        />
        <TextInput
          ref={ref5}
          value={f5}
          inputMode="numeric"
          keyboardType="number-pad"
          style={[styles.textinput, { borderColor: `${f5 ? "green" : "red"}` }]}
          maxLength={1}
          onChangeText={(txt) => {
            setf5(txt);
            if (txt.length > 0) {
              ref6.current.focus();
            } else {
              ref4.current.focus();
            }
          }}
        />
        <TextInput
          ref={ref6}
          value={f6}
          inputMode="numeric"
          keyboardType="number-pad"
          style={[styles.textinput, { borderColor: `${f6 ? "green" : "red"}` }]}
          maxLength={1}
          onChangeText={(txt) => {
            setf6(txt);
            if (txt.length > 0) {
              ref6.current.focus();
            } else {
              ref5.current.focus();
            }
          }}
        />
      </View>
      <View style={{ alignItems: "center", marginTop: 30 }}>
        <TouchableOpacity disabled={timed > 0} style={styles.btnstyle} onPress={resendOtp}>
          <Text style={{ fontSize: 16, fontWeight: "500" }}>
            {timed ? timed+"s" : "Resend"}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ alignItems: "center", marginTop: 50 }}>
        <TouchableOpacity
          disabled={!(f1 && f2 && f3 && f4 && f5 && f6)}
          onPress={() => {
            verifyOTP()
          }}
          style={[
            styles.btnstylevery,
            { backgroundColor: `${f1 && f2 && f3 && f4 && f5 && f6 ? "blue" : "gray"}` },
          ]}
        >
          <Text style={{ fontSize: 16, fontWeight: "500", color: "#fff" }}>
            Verify OTP
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  textinput: {
    borderWidth: 0.5,
    borderRadius: 10,
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: "auto",
    textAlign: "center",
    fontSize: 17,
    fontWeight: "700",
    borderColor: "red",
    marginLeft: 5,
  },
  btnstyle: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0.2,
    width: 100,
    paddingVertical: 7,
    borderRadius: 6,
  },
  btnstylevery: {
    justifyContent: "center",
    alignItems: "center",
    width: 240,
    paddingVertical: 9,
    borderRadius: 6,
  },
});

export default OtpScreen;
