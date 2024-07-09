import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {RouteProp, useRoute} from '@react-navigation/native';
import {users} from '../data/users';

type RootStackParamList = {
  UserProfile: {userId: string};
};

type UserProfileScreenRouteProp = RouteProp<RootStackParamList, 'UserProfile'>;

const UserProfileScreen: React.FC = () => {
  const route = useRoute<UserProfileScreenRouteProp>();
  const {userId} = route.params;

  const user = users.find(u => u.id === userId);

  if (!user) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Usuário não encontrado</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image source={{uri: user.imageUrl}} style={styles.profileImage} />
      <Text style={styles.name}>{user.name}</Text>
      <Text style={styles.role}>{user.role}</Text>
      <Text style={styles.bio}>{user.bio}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
  profileImage: {
    width: 130,
    height: 130,
    borderRadius: 75,
    marginBottom: 20,
    marginTop: 10,
    marginStart: 100,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  role: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom: 10,
  },
  bio: {
    fontSize: 16,
    textAlign: 'left',
    marginBottom: 20,
    paddingHorizontal: 0,
  },
});

export default UserProfileScreen;
