import React from "react";
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

  {/* Hamburgermenyn man trycker på för att få upp meny för Aktivitet, Aviseringar etc */}
export default function HamburgerMenu(){
    return(

        <View style={styles.container}>
            <View style={styles.hamburgerButtonContainer}>
                <View style={styles.hamburgerButton}>
                    <Ionicons name="menu" size={60} color="black" />
                </View>
            </View>
           
            
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: "#f0f0f0",
        borderRadius: 10,
        flex: 1, 
        position: "relative", 
    },
    hamburgerButtonContainer: {
        position: "absolute", 
        bottom: 10, 
        right: 10, 
        justifyContent: "center", 
        alignItems: "center", 
        //backgroundColor: "lightgray", // debugg färg =)
    },
    hamburgerButton: {
        //backgroundColor: "white", // debugg färg =)
        padding: 10,
        borderRadius: 50,
    },
});
