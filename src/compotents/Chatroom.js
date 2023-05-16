import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import { Zocial } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { TextInput } from "react-native-paper";
import Receiver from "./Receiver";
import Sender from "./Sender";

const Chatroom = ({ navigation, route }) => {
  const messages = [
    [1, "Hello how are you kese hai aap log"],
    [1, "Hello how are you"],
    [2, "Hello how are you"],
    [1, "Hello how are you"],
    [2, "Hello how are you"],
    [2, "Hello how are you"],
    [1, "Hello how are you"],
    [2, "Hello how "],
    [2, "Hello how "],
    [2, "Hello how "],
    [1, "Hello how "],
    [1, "Hello how "],
    [2, "Hello how "],
  ];
  const name = route.params.name;
  return (
    <>
      <View>
        <View style={{ height: 38, backgroundColor: "#0C6157" }}></View>
        <View
          style={{
            paddingHorizontal: 17,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#0C6157",
            height: 60,
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View>
              <TouchableOpacity
                onPress={() => {
                  navigation.goBack();
                }}
              >
                <FontAwesome5 name="arrow-left" size={22} color="#fff" />
              </TouchableOpacity>
            </View>
            <View style={{ marginHorizontal: 8 }}>
              <Image
                style={{
                  width: 37,
                  height: 37,
                  borderRadius: 50,
                }}
                source={{
                  uri: "https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg",
                }}
              />
            </View>
            <View>
              <Text style={{ fontSize: 17, fontWeight: "bold", color: "#fff" }}>
              {name.length > 14
                            ? name.slice(0, 14) + "..."
                            : name.slice(0, 14)}
              </Text>
            </View>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              position: "absolute",
              right: 10,
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              style={{ paddingHorizontal: 7 }}
              onPress={() => {
                navigation.push("Camera");
              }}
            >
              <Ionicons name="ios-videocam" size={24} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity
              style={{ paddingHorizontal: 10 }}
              onPress={() => {
                navigation.push("Search");
              }}
            >
              <Zocial name="call" size={22} color="#fff" />
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
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{
            paddingHorizontal: 10,
            backgroundColor: "#717178",
            paddingTop: 5,
          }}
        >
          {Array.from(messages).map((message, ind) => {
            return message[0] != 1 ? (
              <Receiver  key={ind} msg={"Hello"} time={"08:15 PM"} id={ind}/>
            ) : (
              <Sender key={ind} msg={"Hello How u"} time={"08:15 PM"} id={ind}/>
            );
          })}
          {/* <FlatList 
          data={messages}
          keyExtractor={({index})=>{return index}}
          renderItem={({item,index})=>{
            return (item[0] != 1 ? (
              <Receiver key={index} msg={"Hello"} time={"08:15 PM"} id={12}/>
            ) : (
              <Sender key={index} msg={"Hello How u"} time={"08:15 PM"} id={12}/>
            ))
          }}
          /> */}
          <View style={{ height: 150 }}></View>
        </ScrollView>
      </View>
    </>
  );
};

export default Chatroom;
