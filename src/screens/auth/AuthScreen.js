import React from "react";
import { View, Text, Button } from "react-native";

import startMainTabs from "../mainTabs/MainTabs";

/**
 * The login screen
 */
class AuthScreen extends React.Component {
  /**
   * Handle user login event
   */
  loginHandler = () => {
    startMainTabs();
  };

  render() {
    return (
      <View>
        <Text>Please Login</Text>
        <Button title="Login" onPress={this.loginHandler} />
      </View>
    );
  }
}

export default AuthScreen;
