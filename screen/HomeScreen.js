import * as React from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const HomeScreen = () => (
  <Card>
    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
     <Card.Content>
      <Title>Card title</Title>
      <Paragraph style={{fontWeight:"bold"}} > Segment </Paragraph>
      <Paragraph> Genre </Paragraph>
      <Paragraph> Info </Paragraph>
    </Card.Content>
    <Card.Actions>
      <Button mode="outlined" style={{marginRight:10}} color= "black">Address</Button>
      <Button mode="outlined" color= "black" >Buy Tickets</Button>
    </Card.Actions>
  </Card>
);

export default HomeScreen;

