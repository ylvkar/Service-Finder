import React from "react";
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
                        <Text>Bullbak hos Stina</Text>
                        <Text>Adress: Lorem ipsum</Text>
                        <Text>Tid: 13:37</Text>
                        <Text>Datum: 2024-12-06</Text>
                    </View>

                    <View style={styles.activity_box}>
                        <Text>Baxa en cykel</Text>
                        <Text>Adress: Lorem ipsum</Text>
                        <Text>Tid: 13:37</Text>
                        <Text>Datum: 2024-12-06</Text>
                    </View>

                    <View style={styles.activity_box}>
                        <Text>Fläta skägget på en get</Text>
                        <Text>Adress: Lorem ipsum</Text>
                        <Text>Tid: 13:37</Text>
                        <Text>Datum: 2024-12-06</Text>
                    </View>

                    <View style={styles.activity_box}>
                        <Text>Fläta skägget på en get</Text>
                        <Text>Adress: Lorem ipsum</Text>
                        <Text>Tid: 13:37</Text>
                        <Text>Datum: 2024-12-06</Text>
                    </View>

                    <View style={styles.activity_box}>
                        <Text>Fläta skägget på en get</Text>
                        <Text>Adress: Lorem ipsum</Text>
                        <Text>Tid: 13:37</Text>
                        <Text>Datum: 2024-12-06</Text>
                    </View>

                    <View style={styles.activity_box}>
                        <Text>Fläta skägget på en get</Text>
                        <Text>Adress: Lorem ipsum</Text>
                        <Text>Tid: 13:37</Text>
                        <Text>Datum: 2024-12-06</Text>
                    </View>
                </ScrollView>
                
            </View>

            <View style={styles.historik}>
            <Text style={{ fontSize: 25 }}>Historik</Text>

                <ScrollView style={styles.scrollable_activity_container}>
                    <View style={styles.activity_box}>
                        <Text>Bullbak hos Stina</Text>
                        <Text>Adress: Lorem ipsum</Text>
                        <Text>Tid: 13:37</Text>
                        <Text>Datum: 2024-12-06</Text>
                    </View>

                    <View style={styles.activity_box}>
                        <Text>Baxa en cykel</Text>
                        <Text>Adress: Lorem ipsum</Text>
                        <Text>Tid: 13:37</Text>
                        <Text>Datum: 2024-12-06</Text>
                    </View>

                    <View style={styles.activity_box}>
                        <Text>Fläta skägget på en get</Text>
                        <Text>Adress: Lorem ipsum</Text>
                        <Text>Tid: 13:37</Text>
                        <Text>Datum: 2024-12-06</Text>
                    </View>

                    <View style={styles.activity_box}>
                        <Text>Fläta skägget på en get</Text>
                        <Text>Adress: Lorem ipsum</Text>
                        <Text>Tid: 13:37</Text>
                        <Text>Datum: 2024-12-06</Text>
                    </View>

                    <View style={styles.activity_box}>
                        <Text>Fläta skägget på en get</Text>
                        <Text>Adress: Lorem ipsum</Text>
                        <Text>Tid: 13:37</Text>
                        <Text>Datum: 2024-12-06</Text>
                    </View>

                    <View style={styles.activity_box}>
                        <Text>Fläta skägget på en get</Text>
                        <Text>Adress: Lorem ipsum</Text>
                        <Text>Tid: 13:37</Text>
                        <Text>Datum: 2024-12-06</Text>
                    </View>
                </ScrollView>
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

    },
    activity_box: {
        padding: 10,
        marginBottom: 20,
        borderWidth: 2,       
        borderColor: "#FF0000", 
        borderRadius: 10,     
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
  });
  