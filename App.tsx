import React, { useEffect, useState } from "react";
import { StyleSheet, View, Alert } from "react-native";
import Mapbox from "@rnmapbox/maps";
import * as Location from "expo-location";

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

  return (
    <View style={styles.container}>
      <Mapbox.MapView style={styles.map} styleURL={Mapbox.StyleURL.Street}>
        <Mapbox.UserLocation visible={true} />
      </Mapbox.MapView>
    </View>
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
