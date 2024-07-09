// ProfileScreen.tsx
import React from 'react';
import {
  View,
  Text,
  Image,
  Linking,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import styles from '../styles/profileStyles';

const ProfileScreen = () => {
  const handlePress = (url: string) => {
    Linking.openURL(url);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.name}>Ezio Tristão</Text>
      <Text style={styles.bio}>
        I am a software engineer passionate about creating innovative solutions
        that generate value for businesses and users. My experience spans the
        development of mobile and web applications, with a focus on the
        practical application of innovation and artificial intelligence to
        optimize processes and enhance user experience. I am driven by the
        challenge of employing best development practices to build high-quality
        products and services. I possess strong communication and organizational
        skills, which enable me to lead teams, collaborate effectively, and
        achieve tangible results in projects of all sizes, both in B2B and B2C
        environments. My adaptability allows me to successfully navigate the
        constant changes in the market and emerging technologies. I am always
        motivated by opportunities to apply my knowledge in AI and software
        development to create solutions that drive growth and innovation.
      </Text>

      <View style={styles.linksContainer}>
        <TouchableOpacity
          accessible={true}
          accessibilityLabel="GitHub Profile"
          style={styles.button}
          onPress={() => handlePress('https://github.com/TristaoEzio')}>
          <Text style={styles.buttonText}>GitHub</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            handlePress('https://www.linkedin.com/in/your-profile')
          }>
          <Text style={styles.buttonText}>LinkedIn</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => handlePress('https://wa.me/your-whatsapp-number')}>
          <Text style={styles.buttonText}>WhatsApp</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => handlePress('https://twitter.com/your-profile')}>
          <Text style={styles.buttonText}>X (Twitter)</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.quote}>
        "Imagination is more important than knowledge. For knowledge is limited
        to all we now know and understand, while imagination embraces the entire
        world, and all there ever will be to know and understand."" - Albert Einstein
      </Text>
    </ScrollView>
  );
};

export default ProfileScreen;
