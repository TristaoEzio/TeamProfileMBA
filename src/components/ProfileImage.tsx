import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

interface ProfileImageProps {
  imageUrl: string;
}

const ProfileImage: React.FC<ProfileImageProps> = ({imageUrl}) => {
  return (
    <View style={styles.imageContainer}>
      <Image source={{uri: imageUrl}} style={styles.profileImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    overflow: 'hidden',
    backgroundColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    width: '100%',
    height: '100%',
  },
});

export default ProfileImage;
