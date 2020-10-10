import * as React from 'react';
import { useState } from 'react';
import { Button, Card, Title, Paragraph } from 'react-native-paper';
import { ScrollView, View ,Linking } from 'react-native';
import apiKey from './key.js';
import * as Location from 'expo-location';

//HomeScreen Component
const HomeScreen = ({ navigation }) => {
  let [data, setData] = useState([]);
  const [lat, setLatitude] = React.useState(null);
  const [lng, setLongitude] = React.useState(null);
  const [errorMsg, setErrorMsg] = React.useState(null);

  //Function to get gps location 
  React.useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
      }
      let location = await Location.getCurrentPositionAsync({});
      setLatitude(location.coords.latitude);
      setLongitude(location.coords.longitude);
    })();
  }, []);

  //Function to fetch data from ticketmaster api
  React.useEffect(() => {
    fetch(
      `https://app.ticketmaster.com/discovery/v2/events.json?keyword=music&geoPoint=${lat},${lng}&radius=20&unit=km&sort=date,asc&size=20&apikey=${apiKey}`,
    )
      .then((response) => response.json())
      .then((json) => setData(json._embedded.events))
      .catch((error) => console.log(error));
  }, [lat, lng]);

  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#f2f2f2',
        }}
      >
        {data
        //filter to no render events that were cancelled
          .filter(({ dates }) => dates.status.code != 'cancelled')
          
          // Card to render each music events that come from TicketMaser API
          .map((eachData) => (
            <Card
              key={eachData.id}
              style={{
                width: '92%',
                marginTop: 20,
                width: '92%',
                marginTop: 20,
                borderColor: '#595959',
                borderStyle: 'solid',
                borderWidth: 0.5,
              }}
            >
              <Card.Cover
                key={eachData.images[0].url}
                source={{ uri: eachData.images[4].url }}
              />

              <Card.Content>
                <Title>{eachData.name}</Title>
                <Paragraph style={{ fontWeight: 'bold' }}>
                  {eachData.classifications[0].segment.name}
                </Paragraph>
                <Paragraph> {eachData.classifications[0].genre.name}</Paragraph>
                <Paragraph> {eachData.pleaseNote}</Paragraph>
              </Card.Content>

              <Card.Actions>

                { /*Button to navigate to MapC Screen*/}
                <Button
                  mode="contained"
                  onPress={() => navigation.navigate('Event Address', eachData)}
                  color={'grey'}
                  dark={true}
                >
                  Address
                </Button>

                {/* Button to externally open ticket link*/}
                <Button
                  mode="outlined"
                  onPress={() => {
                    Linking.openURL(eachData.url);
                  }}
                  color={'grey'}
                >
                  Buy Tickets
                </Button>
              </Card.Actions>
            </Card>
          ))}
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
