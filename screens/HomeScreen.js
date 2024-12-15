// screens/HomeScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, Card, Icon } from 'react-native-elements';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to MyApp</Text>
      <Card>
        <Card.Title>Home Screen</Card.Title>
        <Card.Divider />
        <Text style={styles.cardText}>Choose an option below:</Text>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Details')}
          buttonStyle={styles.button}
          icon={<Icon name="info" size={15} color="white" />}
        />
        <Button
          title="Go to Profile"
          onPress={() => navigation.navigate('Profile')}
          buttonStyle={styles.button}
          icon={<Icon name="person" size={15} color="white" />}
          containerStyle={{ marginTop: 10 }}
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
    backgroundColor: '#f0f8ff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  cardText: {
    marginBottom: 10,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#007bff',
  },
});

export default HomeScreen;