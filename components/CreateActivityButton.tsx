import React from "react";
import Octicons from '@expo/vector-icons/Octicons';
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    ScrollView,
  } from "react-native";

  {/* "Plus ikonen" som användaren trycker för att skapa en aktivitet. Vid "onClick" ska användaren få skapa aktivitet popUp alternativt
    bli navigerad till separat sida*/}
export default function CreateActivityButton(){
    return(

        <View style={styles.container}>
            
            <View style={styles.activityButtonContainer}>
                <View style={styles.createActivityButton}>
                    {/*<Octicons name="plus-circle" size={80} color="black" /> */}
                    <Image source={require("../assets/images/createActivityButton.png")}
                        style={{ width: 100, height: 100 }}>
                    </Image>
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
    activityButtonContainer: {
        position: "absolute", 
        bottom: 20, 
        left: 0, 
        right: 0, 
        justifyContent: "center", 
        alignItems: "center", 
    },
    createActivityButton: {
    },
});


