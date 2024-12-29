import React, { useEffect, useState } from "react";
import { StyleSheet, View, Alert } from "react-native";
import Mapbox, { Camera } from "@rnmapbox/maps";
import * as Location from "expo-location";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { GestureHandlerRootView } from 'react-native-gesture-handler'; 

Mapbox.setAccessToken(
  "pk.eyJ1IjoibWVnYW55YW0iLCJhIjoiY201MGh1OW1wMWdsNjJub2RnemFnODZieiJ9.WrX1uSxj4JO8BG80gI-vkA"
);

const App = () => {
  const [locationGranted, setLocationGranted] = useState(false);

  useEffect(() => {
    const requestPermissions = async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        Alert.alert("Permission Denied", "Location permission is required to use this feature.");
        return;
      }
      setLocationGranted(true);
    };

    requestPermissions();
  }, []);

  if (!locationGranted) {
    return null;
  }

  const longTap = Gesture.LongPress().onEnd((e, success) => {
    if (success) {
      console.log(`Long pressed for ${e.duration} ms!`);
    }
  });

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <GestureDetector gesture={longTap}>
      <View style={styles.container}>
        <Mapbox.MapView style={styles.map} styleURL={Mapbox.StyleURL.Street}>
          <Camera followZoomLevel={8} followUserLocation/>
          <Mapbox.UserLocation visible={true} />
        </Mapbox.MapView>
      </View>
      </GestureDetector>
    </GestureHandlerRootView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});
