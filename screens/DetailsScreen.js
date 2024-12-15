// screens/DetailsScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, Card, Icon } from 'react-native-elements';

const DetailsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Card>
        <Card.Title>Details</Card.Title>
        <Card.Divider />
        <Text style={styles.cardText}>Informasi Tambambahan MY Self:</Text>
        <Text style={styles.detailText}>- Hobbies: Bermain Game, Nonton film</Text>
        <Text style={styles.detailText}>- Favorite Food: Nasi Goreng</Text>
        <Text style={styles.detailText}>- Dream Job: Polisi, Kantor</Text>
        <Button
          title="Go to Home"
          onPress={() => navigation.navigate('Home')}
          buttonStyle={styles.button}
          icon={<Icon name="home" size={15} color="white" />}
        />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e6f7ff',
  },
  cardText: {
    marginBottom: 10,
    fontSize: 16,
  },
  detailText: {
    marginBottom: 5,
    fontSize: 16,
    color: '#333',
  },
  button: {
    backgroundColor: '#007bff',
  },
});

export default DetailsScreen;