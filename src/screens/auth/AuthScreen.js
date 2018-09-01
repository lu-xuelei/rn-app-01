import React from "react";
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Dimensions,
  Switch,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";

import startMainTabs from "../mainTabs/MainTabs";
import DefTextInput from "../../UI/defTextInput/DefTextInput";
import DefButton from "../../UI/buttons/DefButton";
import backgroundImage from "../../assets/images/Background01.jpg";

import { txtHeadings, txtLabels } from "../../UI/styles/TxtStyles";
import { validateInput } from "../../utilities/Utilities";

/**
 * The login screen
 */
class AuthScreen extends React.Component {
  state = {
    controls: {
      username: {
        value: "",
        validationRules: {
          isEmail: true,
          required: true,
          maxLength: 60
        },
        valid: false,
        touched: false
      },
      password: {
        value: "",
        validationRules: {
          minLength: 6,
          impacted: ["confpswd"]
        },
        valid: false,
        touched: false
      },
      confpswd: {
        value: "",
        validationRules: {
          minLength: 6,
          dependencies: {
            equalTo: "password"
          }
        },
        valid: false,
        touched: false
      }
    },
    formIsValid: false,
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

  /**
   * Update signup flag when switch value is changed
   */
  switchSignUpHandler = val => {
    this.setState({
      signup: val
    });
  };

  /**
   * Handle input value change
   * @param {string} itemKey key of the updated item
   * @param {string} itemValue value of the updated item
   */
  inputChangeHandler = (itemKey, itemValue) => {
    // Clone the contrls (this will not clone the objects, but clone the pointer to the object only)
    const updatedControls = { ...this.state.controls };

    // Clone the related input item, update its value and set it as touched
    const updatedItem = {
      ...updatedControls[itemKey],
      value: itemValue,
      touched: true
    };

    // Validate the input against the pre-defined rules

    // If dependencies are found, validate dependencies
    let dependencies = {};
    if (updatedItem.validationRules.dependencies) {
      Object.entries(updatedItem.validationRules.dependencies).map(
        ([iKey, iValue]) => {
          dependencies[iKey] = updatedControls[iValue].value;
        }
      );
    }

    // Validate updated item value
    updatedItem.valid = validateInput(
      itemValue,
      updatedItem.validationRules,
      dependencies
    );

    updatedControls[itemKey] = updatedItem;

    // If the updated value is in other item's dependencies, re-validate that item's dependeicies
    Object.entries(updatedControls).map(([iKey, iValue]) => {
      if (
        iKey != itemKey &&
        iValue.touched &&
        iValue.validationRules &&
        iValue.validationRules.dependencies
      ) {
        let depends = {};
        Object.entries(iValue.validationRules.dependencies).map(
          ([depKey, depValue]) => {
            // If the updated item is a dependency of a control item
            if (depValue === itemKey) {
              depends[depKey] = itemValue;
            }
          }
        );

        // If impacted item found, re-validate the item
        if (Object.keys(depends).length > 0) {
          let impactedItem = { ...updatedControls[iKey] };
          impactedItem.valid = validateInput(
            impactedItem.value,
            impactedItem.validationRules,
            depends
          );
          updatedControls[iKey] = impactedItem;
        }
      }
    });

    // Check form validity
    let formIsValid = true;
    for (let key in updatedControls) {
      // if not sign-up, skip confpswd
      if (!updatedControls.signup || key !== "confpswd") {
        formIsValid = updatedControls[key].valid && formIsValid;
      }
    }
    this.setState({ controls: updatedControls, formIsValid: formIsValid });
  };

  render() {
    // display heading only in portait mode
    let heading = null;
    if (this.state.portrait) {
      heading = (
        <View style={styles.HeadingContainer}>
          <Text style={txtHeadings.Heading1}>
            {this.state.signup ? "Please Sign Up" : "Please Login"}
          </Text>
        </View>
      );
    }

    let passwordInput = (
      <DefTextInput
        placeholder="Password"
        secureTextEntry
        invalid={
          this.state.controls.password.touched &&
          !this.state.controls.password.valid
        }
        value={this.state.controls.password.value}
        onChangeText={val => this.inputChangeHandler("password", val)}
      />
    );

    // if it is for sign-up, add in the confirm password
    if (this.state.signup) {
      passwordInput = (
        <View>
          {passwordInput}
          <DefTextInput
            placeholder="Confirm Password"
            secureTextEntry
            invalid={
              this.state.controls.confpswd.touched &&
              !this.state.controls.confpswd.valid
            }
            value={this.state.controls.confpswd.value}
            onChangeText={val => this.inputChangeHandler("confpswd", val)}
          />
        </View>
      );
    }

    return (
      <ImageBackground source={backgroundImage} style={styles.ImageBackground}>
        <KeyboardAvoidingView style={styles.AuthContainer} behavior="padding">
          <TouchableWithoutFeedback
            style={styles.AuthContainer}
            onPress={Keyboard.dismiss}
          >
            <View style={styles.AuthContainer}>
              {heading}
              <View style={styles.InputContainer}>
                <DefTextInput
                  placeholder="Your Email"
                  keyboardType="email-address"
                  invalid={
                    this.state.controls.username.touched &&
                    !this.state.controls.username.valid
                  }
                  value={this.state.controls.username.value}
                  onChangeText={val => this.inputChangeHandler("username", val)}
                />
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
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
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
    width: "100%",
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
