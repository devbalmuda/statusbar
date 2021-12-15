# ReactNative Statusbar 

On this tutorial, it used the expo-status-bar library not default StatusBar component in react-native.

expo-status-bar gives you a component and imperative interface to control the app status bar to change its text color, background color, hide it, make it translucent or opaque, and apply animations to any of these changes. Exactly what you are able to do with the StatusBar component depends on the platform you're using.

## Common

This props works on android and iOS both. The react-native StatusBar (currentHeight) is not included on this library(expo-staus-bar) but (expo-constants)

### style (StatusBarStyle) 
- The color of the status bar text.

### animated (boolean)
- If the transition between status bar property changes, such as style, should be animated.

### hidden (boolean) 
- If the status bar should be hidden.

## Android

This props is only working on android. If you set the translucent true or false, your component height might change as the statusbar height is included on the screen or not.

#### example 

Screen height is 600. 

transluent(true) : screen height(600) = 560+ statusbar height(40)

![transluent(true)](/assets/translucent_true.png)

transluent(false) : screen height(600)

![transluent(false)](/assets/translucent_false.png)

### backgroundColor (string) 
- The background color of the status bar. [Android only]

### translucent (boolean) 
- Whether the app can draw under the status bar. When true, content will be rendered under the status bar. This is always true on iOS and cannot be changed. On Android, the default is also true unless you have explicitly configured the androidStatusBar.translucent key in app.json to false. [Android only]


## iOS

This props is only working on iOS.

### networkActivityIndicatorVisible (boolean) 
- If the network activity indicator should be visible. [iOS only]

### hideTransitionAnimation (StatusBarAnimation) 
- The transition effect when showing and hiding the status bar. Defaults to 'fade'. [iOS only]