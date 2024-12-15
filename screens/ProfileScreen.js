// screens/ProfileScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, Card, Icon } from 'react-native-elements';

const ProfileScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Card>
        <Card.Title>Profile Screen</Card.Title>
        <Card.Divider />
        <Text style={styles.cardText}>This is my profile:</Text>
        <Text style={styles.profileText}>- Name: Alif Bagas Saputra</Text>
        <Text style={styles.profileText}>- Age: 22</Text>
        <Text style={styles.profileText}>- Email: alifbagas@gmail.com</Text>
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
    backgroundColor: '#f0f8ff',
  },
  cardText: {
    marginBottom: 10,
    fontSize: 16,
  },
  profileText: {
    marginBottom: 5,
    fontSize: 16,
    color: '#333',
  },
  button: {
    backgroundColor: '#007bff',
  },
});

export default ProfileScreen;