import * as React from 'react';
import MapView from 'react-native-maps';
import { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { StyleSheet, Text, View, Linking } from 'react-native';
import { Button } from 'react-native-paper';

//Map Screen Component
const MapC = ({ route }) => {
  //Retriving HomeScreen data through route params
  const address = route.params;
  const cord = route.params;
  const lat = Number(cord._embedded.venues[0].location.latitude);
  const lng = Number(cord._embedded.venues[0].location.longitude);

  return (
    <View style={styles.container}>
      {/* MapView component that renders the GoogleMaps*/}
      <MapView
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        minZoomLevel={17}
        style={styles.mapStyle}
      >
        {/* Marker component that renders a component on map */}
        <Marker coordinate={{ latitude: lat, longitude: lng }} />
      </MapView>

      <View style={{ marginTop: 20 }}>
        <Text>Address: {address._embedded.venues[0].address.line1}</Text>

        {/* Button to externally open the address on GoogleMaps app*/}
        <Button
          onPress={() => {
            Linking.openURL(`https://www.google.com/maps/place/${lat},${lng}`);
          }}
        >
          Open in Map
        </Button>

      </View>
    </View>
  );
};
//Map Screen styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
  },
  mapStyle: {
    width: '96%',
    height: '40%',
    marginTop: 10,
  },
});

export default MapC;
