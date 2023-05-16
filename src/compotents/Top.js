import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const Home = ({ navigation }) => {
  return (
    <>
      <View style={{height:38,backgroundColor:"#0C6157"}}></View>
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
          <Text style={{ fontSize: 22, fontWeight: "bold",color:"#fff" }}>ChatApp</Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            position: "absolute",
            right: 10,
          }}
        >
          <TouchableOpacity style={{ paddingHorizontal: 7 }}>
            <Feather name="camera" size={22} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity style={{ paddingHorizontal: 10 }}>
            <FontAwesome5 name="search" size={20} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity style={{ paddingRight: 10 }}>
            <Entypo name="dots-three-vertical" size={20} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          backgroundColor: "#0C6157",
          height: 40,
          alignItems:'center'
        }}
      >
        <View>
          <TouchableOpacity onPress={()=>{navigation.navigate("Chats")}}>
          <Text style={{ fontSize: 18, fontWeight: "600",color:"#fff"}}>Chats</Text>
          </TouchableOpacity>
        </View>
        <View>
        <TouchableOpacity onPress={()=>{navigation.navigate("Status")}}>
          <Text style={{ fontSize: 18, fontWeight: "600",color:"#fff" }}>Status</Text>
          </TouchableOpacity>
        </View>
        <View>
        <TouchableOpacity onPress={()=>{navigation.push('Calls')}}>
          <Text style={{ fontSize: 18, fontWeight: "600",color:"#fff" }}>Calls</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default Home;
//   <View
//   style={{
//     display: "flex",
//     flexDirection: "row",
//     justifyContent: "space-around",
//     backgroundColor: "#0C6157",
//     height: 40,
//     alignItems:'center'
//   }}
// >
//   <View>
//     <TouchableOpacity onPress={()=>{navigation.navigate("Chats")}}>
//     <Text style={{ fontSize: 18, fontWeight: "600",color:"#fff"}}>Chats</Text>
//     </TouchableOpacity>
//   </View>
//   <View>
//   <TouchableOpacity onPress={()=>{navigation.navigate("Status")}}>
//     <Text style={{ fontSize: 18, fontWeight: "600",color:"#fff" }}>Status</Text>
//     </TouchableOpacity>
//   </View>
//   <View>
//   <TouchableOpacity onPress={()=>{navigation.push('Calls')}}>
//     <Text style={{ fontSize: 18, fontWeight: "600",color:"#fff" }}>Calls</Text>
//     </TouchableOpacity>
//   </View>
// </View>