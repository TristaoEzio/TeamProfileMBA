import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import TeamMemberItem from './TeamMemberItem';

const teamMembers = [
  {
    id: '1',
    name: 'Ezio Moreira Tristão Junior',
    role: 'AI Developer',
    imageUrl: 'https://i.ibb.co/wYNg5TP/ezio.png',
  },
  {
    id: '2',
    name: 'Guilherme Marcel de Almeida',
    role: 'Mobile Developer',
    imageUrl: 'https://i.ibb.co/9rh6bMk/guilherme.png',
  },
  {
    id: '3',
    name: 'Margareth Moscardini de Oliveira',
    role: 'CFO',
    imageUrl: 'https://i.ibb.co/nM04sYR/margareth.png',
  },
  {
    id: '4',
    name: 'Rodrigo Rodrigues dos Santos Guilherme',
    role: 'Tech Lead',
    imageUrl: 'https://i.ibb.co/SJRFf2s/rodrigo.png',
  },
];

const TeamList: React.FC = () => {
  return (
    <FlatList
      data={teamMembers}
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <TeamMemberItem
          name={item.name}
          role={item.role}
          imageUrl={item.imageUrl}
          userId={item.id}
        />
      )}
      style={styles.list}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    width: '100%',
  },
});

export default TeamList;
