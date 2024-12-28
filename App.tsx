import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Mapbox, { UserLocation } from "@rnmapbox/maps";

Mapbox.setAccessToken(
  "pk.eyJ1IjoibWVnYW55YW0iLCJhIjoiY201MGh1OW1wMWdsNjJub2RnemFnODZieiJ9.WrX1uSxj4JO8BG80gI-vkA"
);

const App = () => {
  return (
    <View style={styles.container}>
      <Mapbox.MapView style={styles.map} styleURL={Mapbox.StyleURL.Street}>
        <UserLocation />
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
