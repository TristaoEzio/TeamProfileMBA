import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Linking,
  ScrollView,
} from 'react-native';
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

  const handlePress = (url: string) => {
    Linking.openURL(url);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Image source={{uri: user.imageUrl}} style={styles.profileImage} />
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.role}>{user.role}</Text>
        <Text style={styles.bio}>{user.bio}</Text>
        <TouchableOpacity
          style={[styles.button, styles.linkedinButton]}
          onPress={() => handlePress(user.linkedin)}>
          <Text style={styles.buttonText}>LinkedIn</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.githubButton]}
          onPress={() => handlePress(user.github)}>
          <Text style={styles.buttonText}>GitHub</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
    alignItems: 'center',
    width: '100%',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  role: {
    fontSize: 18,
    color: '#666',
    marginBottom: 16,
  },
  bio: {
    fontSize: 16,
    textAlign: 'left',
    marginBottom: 24,
  },
  button: {
    width: '100%', // Ajuste a largura para 100%
    padding: 12,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 12,
    marginBottom: 12,
  },
  linkedinButton: {
    backgroundColor: '#0077B5',
  },
  githubButton: {
    backgroundColor: '#333',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default UserProfileScreen;
