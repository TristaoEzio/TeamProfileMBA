import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../pages/_app';
import ProfileImage from './ProfileImage';

interface TeamMemberItemProps {
  name: string;
  role: string;
  imageUrl: string;
  userId: string;
}

type UserProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'UserProfile'
>;

const TeamMemberItem: React.FC<TeamMemberItemProps> = ({
  name,
  role,
  imageUrl,
  userId,
}) => {
  const navigation = useNavigation<UserProfileScreenNavigationProp>();

  const navigateToProfile = () => {
    navigation.navigate('UserProfile', {userId});
  };

  return (
    <TouchableOpacity style={styles.container} onPress={navigateToProfile}>
      <ProfileImage imageUrl={imageUrl} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.role}>{role}</Text>
      </View>
      <Text style={styles.arrow}>›</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  textContainer: {
    flex: 1,
    marginLeft: 16,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  role: {
    fontSize: 14,
    color: '#666',
  },
  arrow: {
    fontSize: 20,
    color: '#ccc',
  },
});

export default TeamMemberItem;
