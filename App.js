import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
import Constants from 'expo-constants';

//const STYLES = ['default', 'dark-content', 'light-content'];
const STYLES = ['auto', 'dark', 'light', 'inverted'];
const TRANSITIONS = ['fade', 'slide', 'none'];

export default function App() {
  const [translucent, setTranslucent] = React.useState(false);
  const [hidden, setHidden] = React.useState(false);
  const [networkVisible, setNetworkVisible] = React.useState(false);
  const [statusBarStyle, setStatusBarStyle] = React.useState(STYLES[0]);
  const [statusBarTransition, setStatusBarTransition] = React.useState(TRANSITIONS[0]);

  const changeStatusBarVisibility = () => {
    setHidden(!hidden);
  }

  const changeStatusBarNetworkVisible = () => {
    setNetworkVisible(!networkVisible);
  }

  const changeStatusBarTranslucent = () => {
    setTranslucent(!translucent);
  }

  const changeStatusBarStyle = () => {
    const styleId = STYLES.indexOf(statusBarStyle) + 1;
    if (styleId === STYLES.length) {
      setStatusBarStyle(STYLES[0]);
    } else {
      setStatusBarStyle(STYLES[styleId]);
    }
  };

  const changeStatusBarTransition = () => {
    const transition = TRANSITIONS.indexOf(statusBarTransition) + 1;
    if (transition === TRANSITIONS.length) {
      setStatusBarTransition(TRANSITIONS[0]);
    } else {
      setStatusBarTransition(TRANSITIONS[transition]);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="#61dafb"
        translucent={translucent}
        //barStyle={statusBarStyle}
        //showHideTransition={statusBarTransition}
        hideTransitionAnimation={statusBarTransition}
        hidden={hidden}
        networkActivityIndicatorVisible={networkVisible}
        style={statusBarStyle}
      />
      {
        Platform.OS === "android" &&
        <Text style={styles.textStyle}>
          [Android] currentHeight : {Constants.statusBarHeight}
        </Text>
      }
      {
        Platform.OS === "android" &&
        <Text style={styles.textStyle}>
          [Android] Translucent : {translucent ? "true" : "false"}
        </Text>
      }
      <Text style={styles.textStyle}>
        StatusBar Visibility : {hidden ? 'Hidden' : 'Visible'}
      </Text>
      <Text style={styles.textStyle}>
        StatusBar Style : {statusBarStyle}
      </Text>
      {
        Platform.OS === 'ios'
          ? <Text style={styles.textStyle}>
            [iOS] StatusBar Transition:{'\n'}
            {statusBarTransition}
          </Text>
          : null
      }
      <View style={styles.button}>
        <Button
          title="Toggle StatusBar"
          onPress={changeStatusBarVisibility}
        />
      </View>
      <View style={styles.button}>
        <Button
          title="Change StatusBar Style"
          onPress={changeStatusBarStyle}
        />
      </View>
      {
        Platform.OS === 'android'
          ? <View style={styles.button}>
            <Button
              title="[Android] Change StatusBar Translucent "
              onPress={changeStatusBarTranslucent}
            />
          </View>
          : null
      }
      {
        Platform.OS === 'ios'
          ? <View style={styles.button}>
            <Button
              title="[iOS] Change StatusBar Transition"
              onPress={changeStatusBarTransition}
            />
          </View>
          : null
      }
      {
        Platform.OS === 'ios'
          ? <View style={styles.button}>
            <Button
              title="[iOS] Change StatusBar Network Visible"
              onPress={changeStatusBarNetworkVisible}
            />
          </View>
          : null
      }
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    height: 600,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonsContainer: {
    padding: 10,
  },
  button: {
    margin: 10,
    width: "80%",
  },
  textStyle: {
    color:"#FFF",
    textAlign: 'center',
    marginBottom: 8
  }
});
