import React from "react";
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Dimensions,
  Switch
} from "react-native";

import startMainTabs from "../mainTabs/MainTabs";
import DefTextInput from "../../UI/defTextInput/DefTextInput";
import DefButton from "../../UI/buttons/DefButton";
import backgroundImage from "../../assets/images/Background01.jpg";

import { txtHeadings, txtLabels } from "../../UI/styles/TxtStyles";

/**
 * The login screen
 */
class AuthScreen extends React.Component {
  state = {
    signup: false,
    portrait: Dimensions.get("window").height > 500
  };

  componentWillMount() {
    // Add dimension event listener before component mount
    Dimensions.addEventListener("change", this.setDisplayMode);
  }

  componentWillUnmount() {
    // Remove dimension event listener before component unmount to avoid memory leak
    Dimensions.removeEventListener("change", this.setDisplayMode);
  }

  /**
   * Update display mode when dimension event is triggered
   */
  setDisplayMode = dim => {
    this.setState({
      ...this.state,
      portrait: dim.window.height > 500
    });
  };

  /**
   * Handle user login event
   */
  loginHandler = () => {
    startMainTabs();
  };

  switchSignUpHandler = event => {
    this.setState({
      signup: event
    });
  };
  render() {
    // display heading only in portait mode
    let heading = null;
    if (this.state.portrait) {
      heading = (
        <View style={styles.HeadingContainer}>
          <Text style={txtHeadings.Heading1}>{this.state.signup?"Please Sign Up" : "Please Login"}</Text>
        </View>
      );
    }

    let passwordInput = <DefTextInput placeholder="Password" />;
    if (this.state.signup) {
      passwordInput = (
        <View>
          <DefTextInput placeholder="Password" />
          <DefTextInput placeholder="Confirm Password" />
        </View>
      );
    }

    return (
      <ImageBackground source={backgroundImage} style={styles.ImageBackground}>
        <View style={styles.AuthContainer}>
          {heading}
          <View style={styles.InputContainer}>
            <DefTextInput placeholder="Your Email" />
            {passwordInput}
            <View style={styles.SwithContainer}>
              <Text style={txtLabels.Short}>Sign Up</Text>
              <Switch
                style={styles.Switch}
                value={this.state.signup}
                tintColor="#F69695"
                onTintColor="#00B460"
                thumbTintColor="#258AD7"
                onValueChange={this.switchSignUpHandler}
              />
            </View>
          </View>
          <DefButton
            title="Submit"
            onPress={this.loginHandler}
            disabled={false}
            type="normal"
          />
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  ImageBackground: {
    flex: 1,
    width: "100%"
  },
  AuthContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  HeadingContainer: {
    marginBottom: 50,
    justifyContent: "center",
    alignItems: "center"
  },
  InputContainer: {
    width: "80%",
    marginBottom: 20
  },
  SwithContainer: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "center"
  },
  Switch: {
    margin: 5
  }
});

export default AuthScreen;
