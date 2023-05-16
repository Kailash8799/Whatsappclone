import { View, Text, ScrollView, Image, TouchableOpacity,Modal, StyleSheet, Dimensions, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import * as Contacts from 'expo-contacts'
import { MaterialIcons } from '@expo/vector-icons';

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

const Chats = ({ navigation }) => {
  const [contact,setcontact] = useState([])
  useEffect(() => {
    (async()=>{
      const {status} = await Contacts.requestPermissionsAsync();
      if(status == "granted"){
        const {data} = await Contacts.getContactsAsync({
          fields:[Contacts.Fields.PhoneNumbers]
        })
        if(data.length > 0){
          setcontact(Array.from(data).map((itm)=>{
            return {name:itm.name,phone:itm.phoneNumbers!=undefined ? itm.phoneNumbers[0].number:""}
          }))
        }
      }
    })() 
  }, [])
  
  return (
    <>
    <View style={{height:39,backgroundColor:"#0C6157"}}></View>
    <View>
    <MaterialIcons name="arrow-back" size={24} color="black" />
    </View>
      <ScrollView style={{ paddingHorizontal: 15, backgroundColor: "#1c1c1f" }}>
        {contact.length != 0 && contact.map((itm, key) => {
          return (
            <TouchableOpacity
              key={key}
              style={{ marginVertical: 10 }}
              activeOpacity={1}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <View>
                    <Image
                      style={{
                        width: 50,
                        height: 50,
                        borderRadius: 50,
                      }}
                      source={{
                        uri: "https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg",
                      }}
                    />
                </View>
                <View style={{ marginLeft: 20 }}>
                  <TouchableOpacity
                    activeOpacity={0.6}
                    onPress={() => {
                      navigation.push("Chatroom", { name: itm.name,phone:itm.phone });
                    }}
                  >
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        width: 250,
                      }}
                    >
                      <View>
                        <Text
                          style={{
                            fontWeight: "600",
                            fontSize: 17,
                            color: "#fff",
                          }}
                        >
                          {itm.name.length > 15
                            ? itm.name.slice(0, 16) + "..."
                            : itm.name.slice(0, 16)}
                        </Text>
                      </View>
                      <View>
                        <Text
                          style={{
                            fontWeight: "500",
                            fontSize: 14,
                            color: "#9d9da3",
                          }}
                        >
                          8:40 PM
                        </Text>
                      </View>
                    </View>
                    <View>
                      <Text
                        style={{
                          fontSize: 14,
                          fontWeight: "400",
                          color: "#9d9da3",
                        }}
                      >
                        {itm.phone}
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
              
            </TouchableOpacity>
          );
        })}
        {contact.length == 0 && <View style={{height:windowHeight,width:windowWidth,justifyContent:'center',alignItems:'center'}}>
        <ActivityIndicator size={60} color={"white"}/>
        </View>}
         <View
        style={{
          marginBottom: 100,
          marginTop: 5,
          borderTopWidth: 0.5,
          borderColor: "gray",
          paddingTop: 16,
          display:'flex',
          flexDirection:'row',
          justifyContent: "center",
        }}
      >
        <Text style={{ color: "gray", fontSize: 12, fontWeight: "400" }}>
          Your personal messages are{" "}
        </Text>
        <TouchableOpacity activeOpacity={0.5}>
        <Text style={{ color: "#0C6157", fontSize: 12, fontWeight: "400" }}>
          end-to-end encrypted
        </Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    width:windowWidth,
    height:windowHeight
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 5,
    textAlign: 'center',
  },
});

export default Chats;

