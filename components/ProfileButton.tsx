import React from "react";
import AntDesign from '@expo/vector-icons/AntDesign';
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    ScrollView,
  } from "react-native";

  {/* Profil knappen i vänster nedre hörn, via den ska man nå sin profil */}
export default function ProfileButton(){
    return(
        <View style={styles.container}>

            <View style={styles.profileButtonContainer}>
                <View style={styles.profileButton}> 
                    <AntDesign name="user" size={50} color="black" />          
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
    profileButtonContainer: {
        position: "absolute", 
        bottom: 10, 
        left: 10,  
        justifyContent: "center", 
        alignItems: "center", 
        //backgroundColor: "lightgray", // debugg färg =)
    },
    profileButton: {
        //backgroundColor: "white", // debugg färg =)
        padding: 10,
        borderRadius: 50,
    },
});
