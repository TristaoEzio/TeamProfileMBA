import React from 'react';
import {Text} from 'react-native';
import styles from '../styles/profileStyles';

interface BioTextProps {
  text: string;
}

const BioText: React.FC<BioTextProps> = ({text}) => {
  return <Text style={styles.bio}>{text}</Text>;
};

export default BioText;
