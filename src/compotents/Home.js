import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Chats from "./Chats";
import Status from "./Status";
import Calls from "./Calls";
import { View, Text, TouchableOpacity, BackHandler } from "react-native";
import React, { useEffect } from "react";
import { Feather } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { getAuth } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Tab = createMaterialTopTabNavigator();

  const screenOptions = {
    tabBarItemStyle: { width: 119 },
    tabBarStyle: { backgroundColor: "#0C6157"},
    tabBarActiveTintColor:"black",
    tabBarInactiveTintColor:"#fff",
    tabBarPressOpacity:1,
    tabBarIndicatorStyle: {backgroundColor:"#aeed6f"},
    tabBarLabelStyle:{ textTransform: "none", fontSize: 19, fontWeight:'500' },
  }
  

const Home = ({ navigation }) => {
  const auth = getAuth()
  useEffect(()=>{
    (async()=>{
      try {
        const value = await AsyncStorage.getItem('@storage_Key')
        if(value === null){
            await AsyncStorage.setItem('@storage_Key', auth.currentUser.stsTokenManager.accessToken)
        }
      } catch (e) {
      }
    })()
  },[])


  return (
    <>
      <View style={{ height: 38, backgroundColor: "#0C6157" }}></View>
      <View
        style={{
          paddingHorizontal: 17,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "#0C6157",
          height: 50,
        }}
      >
        <View>
          <Text style={{ fontSize: 22, fontWeight: "bold", color: "#fff" }}>
            ChatApp
          </Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            position: "absolute",
            right: 10,
            alignItems:'center'
          }}
        >
          <TouchableOpacity
            style={{ paddingHorizontal: 7 }}
            onPress={() => {
              navigation.push("Camera");
            }}
          >
            <Feather name="camera" size={22} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ paddingHorizontal: 10 }}
            onPress={() => {
              navigation.push("Search");
            }}
          >
            <FontAwesome5 name="search" size={20} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ paddingRight: 10 }}
            onPress={() => {
              navigation.push("Camera");
            }}
          >
            <Entypo name="dots-three-vertical" size={20} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>

      <Tab.Navigator
        screenOptions={screenOptions}
      >
        <Tab.Screen
          name="Chats"
          component={Chats}
          options={{ title: "Chats"}}
          
        />
        <Tab.Screen
          name="Status"
          component={Status}
          options={{ title: "Status" }}
        />
        <Tab.Screen
          name="Calls"
          component={Calls}
          options={{ title: "Calls" }}
        />
      </Tab.Navigator>
    </>
  );
};

export default Home;
