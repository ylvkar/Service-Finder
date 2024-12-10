import React, { useState, useRef, useEffect } from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Dimensions,
  ScrollView,
} from "react-native";
const { height, width } = Dimensions.get("window");
const SMALL_SCREEN_WIDTH = 375; // Small screen dimensions
interface PopupProps {
  title: string;
  info: string;
  onClose: () => void;
}

export function PopupActivity({ title, info, onClose }: PopupProps) {
  const fadeAnimation = useRef(new Animated.Value(0)).current;
  const scaleAnimation = useRef(new Animated.Value(0.8)).current;

  const openAnimation = () => {
    Animated.parallel([
      Animated.timing(fadeAnimation, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnimation, {
        toValue: 1,
        friction: 5,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const exitAnimation = () => {
    Animated.parallel([
      Animated.timing(fadeAnimation, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnimation, {
        toValue: 0.8,
        friction: 5,
        useNativeDriver: true,
      }),
    ]).start(() => {
      onClose();
    });
  };

  useEffect(() => {
    openAnimation();
  }, []);

  return (
    <Animated.View
      style={[
        styles.container,
        {
          opacity: fadeAnimation,
          transform: [{ scale: scaleAnimation }],
        },
      ]}
    >
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>{title}</Text>
      </View>
      <View style={styles.infoContainer}>
        <ScrollView
          contentContainerStyle={styles.scrollViewContentContainer}
          showsVerticalScrollIndicator={true}
        >
          <Text style={styles.infoText}>{info}</Text>
        </ScrollView>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={exitAnimation}>
          <Text style={styles.buttonText}>Skapa</Text>
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "lightgray",
    width: "80%",
    height: "90%",
    left:55, // placerar skiten i mitten tror jag xd
    borderRadius: 10,
    padding: 40,
    gap: 20,
    position: "absolute",
    zIndex: 1000,
    flex: 1,
    
  },
  titleContainer: {
    display: "flex",
    alignContent: "center",
  },
  titleText: {
    textAlign: "center",
    fontSize: 30,
    color: "#00000",
  },
  infoContainer: {
    flex: 1, // Take full width to ensure proper rendering
  },
  infoText: {
    textAlign: "left",
    fontSize: 18,
  },
  buttonContainer: {
    marginRight: "auto",
    marginLeft: "auto",
  },
  button: {
    width: 150,
    height: 60,
    backgroundColor: "#FAF7FF",
    borderColor: "#EA9734",
    borderWidth: 3,
    borderRadius: 10,
  },
  buttonText: {
    marginTop: "auto",
    textAlign: "center",
    marginBottom: "auto",
  },
  scrollViewContentContainer: {
    flexGrow: 1,
    paddingVertical: 5,
  },
});
