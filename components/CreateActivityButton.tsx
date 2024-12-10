import React, { useState } from "react";
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { PopupActivity } from "./PopupActivity"; 

export default function CreateActivityButton() {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const handleOpenPopup = () => {
    setPopupVisible(true);
  };

  const handleClosePopup = () => {
    setPopupVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.activityButtonContainer}>
        <TouchableOpacity onPress={handleOpenPopup} style={styles.createActivityButton}>
          <Image
            source={require("../assets/images/createActivityButton.png")}
            style={{ width: 100, height: 100 }}
          />
        </TouchableOpacity>
      </View>

      {isPopupVisible && (
        <PopupActivity
          title="Skapa aktivitet"
          info="T"
          onClose={handleClosePopup}
        />
      )}
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