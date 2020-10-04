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

const HomeScreen = () => {
  let [data, setData] = useState({});
  fetch(
    'https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&size=20&sort=date,asc&geoPoint=45.5,23.2&apikey=gDZhYbDRNHjEkiqaRAwIikD3r5FWWTGs',
  )
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      setData(json);
      console.log(json);
    });
  return (
    <ScrollView>
      {data.map}
      <Card>
        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
        <Card.Content>
          <Title>Card title</Title>
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
        <TextInput
          value={data}
          onChangeText={(data) => {
            setData(data);
          }}
        />
      </Card>
    </ScrollView>
  );
};

export default HomeScreen;
