import React from "react";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    ScrollView,
  } from "react-native";

export default function Activity(){
    
    return(
        <View style={styles.container}>

                <View style={styles.PageName}>
                    <Text style={styles.pageNameText}>Aktiviteter</Text>
                </View>

            <View style={styles.kommande_aktiviteter}>
            <Text style={{ fontSize: 25 }}>Kommande aktiviteter</Text>

                <ScrollView style={styles.scrollable_activity_container}>
                    <View style={styles.activity_box}>
                        <View style={styles.activityBoxtextContainer}>
                            <Text>Bullbak hos Stina</Text>
                            <Text>Adress: Lorem ipsum</Text>
                            <Text>Tid: 13:37</Text>
                            <Text>Datum: 2025-03-18</Text>
                        </View>
                        <MaterialIcons name="portrait" size={75} color="black" />
                    </View>

                    <View style={styles.activity_box}>
                        <View style={styles.activityBoxtextContainer}>
                            <Text>Bullbak hos Stina</Text>
                            <Text>Adress: Lorem ipsum</Text>
                            <Text>Tid: 13:37</Text>
                            <Text>Datum: 2025-03-18</Text>
                        </View>
                        <MaterialIcons name="portrait" size={75} color="black" />
                    </View>

                    <View style={styles.activity_box}>
                        <View style={styles.activityBoxtextContainer}>
                            <Text>Bullbak hos Stina</Text>
                            <Text>Adress: Lorem ipsum</Text>
                            <Text>Tid: 13:37</Text>
                            <Text>Datum: 2025-03-18</Text>
                        </View>
                        <MaterialIcons name="portrait" size={75} color="black" />
                    </View>

                    <View style={styles.activity_box}>
                        <View style={styles.activityBoxtextContainer}>
                            <Text>Bullbak hos Stina</Text>
                            <Text>Adress: Lorem ipsum</Text>
                            <Text>Tid: 13:37</Text>
                            <Text>Datum: 2025-03-18</Text>
                        </View>
                        <MaterialIcons name="portrait" size={75} color="black" />
                    </View>

                    <View style={styles.activity_box}>
                        <View style={styles.activityBoxtextContainer}>
                            <Text>Bullbak hos Stina</Text>
                            <Text>Adress: Lorem ipsum</Text>
                            <Text>Tid: 13:37</Text>
                            <Text>Datum: 2025-03-18</Text>
                        </View>
                        <MaterialIcons name="portrait" size={75} color="black" />
                    </View>

                    <View style={styles.activity_box}>
                        <View style={styles.activityBoxtextContainer}>
                            <Text>Bullbak hos Stina</Text>
                            <Text>Adress: Lorem ipsum</Text>
                            <Text>Tid: 13:37</Text>
                            <Text>Datum: 2025-03-18</Text>
                        </View>
                        <MaterialIcons name="portrait" size={75} color="black" />
                    </View>
                </ScrollView>
                
            </View>

            <View style={styles.historik}>
            <Text style={{ fontSize: 25 }}>Historik</Text>

                <ScrollView style={styles.scrollable_activity_container}>
                    <View style={styles.activity_box}>
                        <View style={styles.activityBoxtextContainer}>
                            <Text>Baxa Ylvas cykel</Text>
                            <Text>Adress: Lorem ipsum</Text>
                            <Text>Tid: 13:37</Text>
                            <Text>Datum: 2024-12-06</Text>
                        </View>
                        <MaterialIcons name="portrait" size={75} color="black" />
                    </View>

                    <View style={styles.activity_box}>
                        <View style={styles.activityBoxtextContainer}>
                            <Text>Baxa Ylvas cykel</Text>
                            <Text>Adress: Lorem ipsum</Text>
                            <Text>Tid: 13:37</Text>
                            <Text>Datum: 2024-12-06</Text>
                        </View>
                        <MaterialIcons name="portrait" size={75} color="black" />
                    </View>

                    <View style={styles.activity_box}>
                        <View style={styles.activityBoxtextContainer}>
                            <Text>Baxa Ylvas cykel</Text>
                            <Text>Adress: Lorem ipsum</Text>
                            <Text>Tid: 13:37</Text>
                            <Text>Datum: 2024-12-06</Text>
                        </View>
                        <MaterialIcons name="portrait" size={75} color="black" />
                    </View>

                    <View style={styles.activity_box}>
                        <View style={styles.activityBoxtextContainer}>
                            <Text>Baxa Ylvas cykel</Text>
                            <Text>Adress: Lorem ipsum</Text>
                            <Text>Tid: 13:37</Text>
                            <Text>Datum: 2024-12-06</Text>
                        </View>
                        <MaterialIcons name="portrait" size={75} color="black" />
                    </View>

                    <View style={styles.activity_box}>
                        <View style={styles.activityBoxtextContainer}>
                            <Text>Baxa Ylvas cykel</Text>
                            <Text>Adress: Lorem ipsum</Text>
                            <Text>Tid: 13:37</Text>
                            <Text>Datum: 2024-12-06</Text>
                        </View>
                        <MaterialIcons name="portrait" size={75} color="black" />
                    </View>

                    <View style={styles.activity_box}>
                        <View style={styles.activityBoxtextContainer}>
                            <Text>Baxa Ylvas cykel</Text>
                            <Text>Adress: Lorem ipsum</Text>
                            <Text>Tid: 13:37</Text>
                            <Text>Datum: 2024-12-06</Text>
                        </View>
                        <MaterialIcons name="portrait" size={75} color="black" />
                    </View>
                </ScrollView>
            </View>

            <View style = {styles.hamburger_menu}>
                <Ionicons name="menu" size={50} color="black" />
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      padding: 20,
      backgroundColor: "#f0f0f0",
      borderRadius: 10,
      flex:1,
    },
    scrollable_activity_container:{
        maxHeight: 300,
    },
    kommande_aktiviteter: {
       
    },
    historik:{
        //paddingTop:10,
    },
    activity_box: {
        padding: 10,
        marginBottom: 20,
        borderWidth: 2,
        borderColor: "#000000",
        borderRadius: 10,
        flexDirection: "row", // Layout items in a row
        alignItems: "center", // Center items vertically
        justifyContent: "space-between", // Push text and icon to opposite ends
    },
    activityBoxtextContainer: {
    flex: 1, // Take up remaining space
    },  
    PageName:{

    },
    pageNameText: {
      fontSize: 30,
      fontWeight: "bold",
      color: "#333",
      marginBottom: 20,
      textAlign:"center",
    },
    hamburger_menu:{
    },
  });
  