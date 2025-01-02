import React from "react";
import { StyleSheet, View, Image, ImageBackground, Text } from "react-native";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Button from "../components/Button";
import Paragraph from "../components/Paragraph";

export default function StartScreen({ navigation }) {
  return (
    <Background>
      <View style={styles.headerContainer}>
        <ImageBackground
          source={require("../../assets/bg.jpeg")}
          style={styles.headerImage}
        >
          <View style={styles.headerOverlay}>
            <Text style={styles.leftText}>Manage your subscriptions</Text>

          </View>
        </ImageBackground>
      </View>

      <Logo />
      <Header>Login to Sakura</Header>
      <Paragraph style={styles.subtitle}>
        You can login or sign up here with multiple different client options to
        choose from
      </Paragraph>

      <Button
        mode="outlined"
        icon="google"
        onPress={() => navigation.navigate("LoginScreen")}
        style={styles.button}
      >
        Login with Google
      </Button>

      <Button
        mode="contained"
        onPress={() => navigation.navigate("LoginScreen")}
        style={[styles.button, styles.darkButton]}
      >
        Login
      </Button>
    </Background>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    width: "100%",
    height: 400, // Increased height
    marginBottom: 24,
  },
  headerImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover", // Ensures image covers the full area
  },
  headerOverlay: {
    flex: 1,
    padding: 20,
    
    justifyContent: "center", // Centers content vertically
    alignItems: "center", // Centers content horizontally
  },
  leftText: {
    color: "white",
    fontSize: 24, // Increased for better visibility
    fontWeight: "600",
    textAlign: "center", // Ensures text is centered
  },
 
  
});
