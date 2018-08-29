import React from "react";
import { Text, View, Button, StyleSheet, ImageBackground } from "react-native";

import startMainTabs from "../mainTabs/MainTabs";
import DefTextInput from "../../UI/defTextInput/DefTextInput";
import backgroundImage from '../../assets/images/Background01.jpg';

import { txtHeadings } from "../../UI/styles/TxtStyles";

/**
 * The login screen
 */
class AuthScreen extends React.Component {
  state = {};
  /**
   * Handle user login event
   */
  loginHandler = () => {
    startMainTabs();
  };

  render() {
    return (
      <ImageBackground source={backgroundImage} style={styles.ImageBackground}>
      <View style={styles.AuthContainer}>
        <Text style={txtHeadings.Heading1}>Please Login</Text>
        <View style={styles.InputContainer}>
          <DefTextInput placeholder="Your Email" />
          <DefTextInput placeholder="Password" />
          <DefTextInput placeholder="Confirm Password" />
          <Button title="Login" onPress={this.loginHandler} />
          <Button title="Sign Up" onPress={this.loginHandler} />
        </View>
      </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  ImageBackground: {
    flex: 1,
    width: "100%",
  },
  AuthContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  InputContainer: {
    width: "80%"
  }
});

export default AuthScreen;
