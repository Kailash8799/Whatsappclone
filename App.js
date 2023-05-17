// In App.js in a new project

import * as React from "react";
import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/compotents/Home";
import Search from "./src/compotents/Search";
import Camera from "./src/compotents/Camera";
import Chatroom from "./src/compotents/Chatroom";
import Login from "./src/compotents/Login";
import OtpScreen from "./src/compotents/OtpScreen";
import AllContact from "./src/compotents/AllContact";
import StartScreen from "./src/compotents/StartScreen";
const Stack = createNativeStackNavigator();


function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={"StartScreen"}>
        <Stack.Screen
          name="StartScreen"
          component={StartScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="OTP"
          component={OtpScreen}
          options={{ headerShown: false,animation:'slide_from_right' }}
        />
        <Stack.Screen
          name="Search"
          component={Search}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Camera"
          component={Camera}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Chatroom"
          component={Chatroom}
          options={{ headerShown: false,animation:'slide_from_right'}}
        />
        <Stack.Screen
          name="AllContact"
          component={AllContact}
          options={{ headerShown: false,animation:'flip'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
