import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from '../styles/profileStyles';

interface SocialButtonProps {
  title: string;
  onPress: () => void;
  color: string;
}

const SocialButton: React.FC<SocialButtonProps> = ({title, onPress, color}) => {
  return (
    <TouchableOpacity
      style={[styles.button, {backgroundColor: color}]}
      onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default SocialButton;
