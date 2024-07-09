import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import TeamList from '../components/TeamList';

const TeamScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Equipe GrainALL</Text>
      <TeamList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
});

export default TeamScreen;
