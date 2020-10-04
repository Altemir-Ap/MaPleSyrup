import * as React from 'react';
import { useState } from 'react';
import {
  Avatar,
  Button,
  TextInput,
  Card,
  Title,
  Paragraph,
} from 'react-native-paper';
import { ScrollView } from 'react-native';
import apiKey from './key.js';
const HomeScreen = () => {
  let [data, setData] = useState([]);
  fetch(
    `https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&size=20&sort=date,asc&geoPoint=45.5,23.2&apikey=${apiKey}`,
  )
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      setData(json._embedded.events);
      console.log(json);
    });
  return (
    <ScrollView>
      {data.map((eachData) => (
        <Card key={eachData.id}>
          <Card.Cover
            key={eachData.images[0].url}
            source={{ uri: eachData.images[2].url }}
          />
          <Card.Content>
            <Title>{eachData.name}</Title>
            <Paragraph style={{ fontWeight: 'bold' }}> Segment </Paragraph>
            <Paragraph> Genre </Paragraph>
            <Paragraph> Info </Paragraph>
          </Card.Content>
          <Card.Actions>
            <Button mode="outlined" style={{ marginRight: 10 }} color="black">
              Address
            </Button>
            <Button mode="outlined" color="black">
              Buy Tickets
            </Button>
          </Card.Actions>
        </Card>
      ))}
    </ScrollView>
  );
};

export default HomeScreen;
