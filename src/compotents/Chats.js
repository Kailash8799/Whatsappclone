import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Modal,
  StyleSheet,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import * as Contacts from "expo-contacts";
import { MaterialCommunityIcons } from '@expo/vector-icons';

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Chats = ({ navigation }) => {
  const [contact, setcontact] = useState([]);
  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status == "granted") {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.PhoneNumbers],
        });
        if (data.length > 0) {
          setcontact(
            Array.from(data.slice(0,9)).map((itm) => {
              return {
                name: itm.name,
                phone:
                  itm.phoneNumbers != undefined
                    ? itm.phoneNumbers[0].number
                    : "",
              };
            })
          );
        }
        // setcontact(contact.slice(0, 28));
      }
    })();
  }, []);

  const [modalVisible, setModalVisible] = useState(false);
  const [imagesource, setimagesource] = useState(
    "https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg"
  );
  const openModelView = (img) => {
    setimagesource(img);
    setModalVisible(true);
  };
  return (
    <>
      <ScrollView style={{ paddingHorizontal: 15, backgroundColor: "#1c1c1f" }}>
        {contact.length != 0 &&
          contact.map((itm, key) => {
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
                    <TouchableOpacity
                      activeOpacity={1}
                      onPress={() => {
                        openModelView(
                          "https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg"
                        );
                      }}
                    >
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
                    </TouchableOpacity>
                  </View>
                  <View style={{ marginLeft: 20 }}>
                    <TouchableOpacity
                      activeOpacity={0.6}
                      onPress={() => {
                        navigation.push("Chatroom", {
                          name: itm.name,
                          phone: itm.phone,
                        });
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
                          Hello my name is kailsh and i am adev...
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              </TouchableOpacity>
            );
          })}
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => {
              setModalVisible(!modalVisible);
            }}
            style={styles.centeredView}
          >
            <View style={styles.modalView}>
              <Image
                source={{ uri: imagesource }}
                style={{ width: 200, height: 250, borderRadius: 5 }}
              />
            </View>
          </TouchableOpacity>
        </Modal>
        {contact.length == 0 && (
          <View
            style={{
              height: windowHeight,
              width: windowWidth,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ActivityIndicator size={60} color={"white"} />
          </View>
        )}
        <View
          style={{
            marginBottom: 100,
            marginTop: 5,
            borderTopWidth: 0.5,
            borderColor: "gray",
            paddingTop: 16,
            display: "flex",
            flexDirection: "row",
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
      <TouchableOpacity
      onPress={()=>{navigation.navigate("AllContact")}}
        style={{
          position: "absolute",
          bottom: 14,
          right: 14,
          backgroundColor: "#0C6157",
          height: 50,
          width: 50,
          borderRadius:30,
          alignItems:'center',
          justifyContent:'center'
        }}
      >
          <MaterialCommunityIcons name="phone-message" size={24} color="white" />
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    width: windowWidth,
    height: windowHeight,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
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
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 5,
    textAlign: "center",
  },
});

export default Chats;
