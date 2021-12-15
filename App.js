import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Platform, StyleSheet, Text, View, Pressable } from 'react-native';
import Constants from 'expo-constants';

const STYLES = ['auto', 'dark', 'light', 'inverted'];
const TRANSITIONS = ['fade', 'slide', 'none'];
const COLOR = ["green", "pink", "red"];

export default function App() {
  const [translucent, setTranslucent] = React.useState(false);
  const [hidden, setHidden] = React.useState(false);
  const [animated, setAnimated] = React.useState(false);
  const [networkVisible, setNetworkVisible] = React.useState(false);
  const [statusBarStyle, setStatusBarStyle] = React.useState(STYLES[0]);
  const [statusBarColor, setStatusBarColor] = React.useState(COLOR[0]);
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

  const changeStatusBarAnimated = () => {
    setAnimated(!animated);
  }

  const changeStatusBarColor = () => {
    const colorId = COLOR.indexOf(statusBarColor) + 1;
    if (colorId === COLOR.length) {
      setStatusBarColor(COLOR[0]);
    } else {
      setStatusBarColor(COLOR[colorId]);
    }
  };

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

  const Button = ({title,onPress})=>{
    return(
      <Pressable 
        onPress={onPress}
        style={styles.button}
      >
        <Text style={styles.buttontext}>{title}</Text>
      </Pressable>
    )
  }

  return (
    <View style={styles.container}>
      <StatusBar
        animated={animated}
        backgroundColor={statusBarColor}
        translucent={translucent}
        hideTransitionAnimation={statusBarTransition}
        hidden={hidden}
        networkActivityIndicatorVisible={networkVisible}
        style={statusBarStyle}
      />
      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>
          StatusBar Hidden : {hidden ? 'Hidden' : 'Visible'}
        </Text>
        <Text style={styles.textStyle}>
          StatusBar Style : {statusBarStyle}
        </Text>
        <Text style={styles.textStyle}>
          StatusBar Animated : {animated ? "true" : "false"}
        </Text>
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
        {
          Platform.OS === "android" &&
          <Text style={styles.textStyle}>
            [Android] BackgroundColor : {statusBarColor}
          </Text>
        }
        {
          Platform.OS === 'ios'
            ? <Text style={styles.textStyle}>
              [iOS] showHideTransition : {statusBarTransition}
            </Text>
            : null
        }
        {
          Platform.OS === 'ios'
            ? <Text style={styles.textStyle}>
              [iOS] networkActivityIndicatorVisible : {networkVisible}
            </Text>
            : null
        }
      </View>
      <View style={styles.button}>
        <Button
          title="StatusBar Hidden"
          onPress={changeStatusBarVisibility}
        />
      </View>
      <View style={styles.button}>
        <Button
          title="StatusBar Style"
          onPress={changeStatusBarStyle}
        />
      </View>
      <View style={styles.button}>
        <Button
          title="StatusBar Animated"
          onPress={changeStatusBarAnimated}
        />
      </View>
      {
        Platform.OS === 'android'
          ? <View style={styles.button}>
            <Button
              title="[Android] Translucent "
              onPress={changeStatusBarTranslucent}
            />
          </View>
          : null
      }
      {
        Platform.OS === 'android'
          ? <View style={styles.button}>
            <Button
              title="[Android] StatusBar BackgroundColor "
              onPress={changeStatusBarColor}
            />
          </View>
          : null
      }
      {
        Platform.OS === 'ios'
          ? <View style={styles.button}>
            <Button
              title="[iOS] StatusBar ShowHideTransition "
              onPress={changeStatusBarTransition}
            />
          </View>
          : null
      }
      {
        Platform.OS === 'ios'
          ? <View style={styles.button}>
            <Button
              title="[iOS] StatusBar NetworkActivityIndicatorVisible"
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
    height: 600,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer:{
    width: "80%",
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  buttonsContainer: {
    padding: 10,
  },
  button: {
    margin: 10,
    borderRadius:10,
    width: "80%",
    backgroundColor:"#008af7"
  },
  buttontext:{
    color:"#FFF"
  },
  textStyle: {
    color: "#FFF",
    textAlign: 'center',
    marginBottom: 8
  }
});
