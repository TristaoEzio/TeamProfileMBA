import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import TeamMemberItem from './TeamMemberItem';

const teamMembers = [
  {
    id: '1',
    name: 'Ezio Moreira Tristão Junior',
    role: 'AI Developer',
    imageUrl: 'https://via.placeholder.com/100',
  },
  {
    id: '2',
    name: 'Guilherme Marcel de Almeida',
    role: 'Mobile Developer',
    imageUrl: 'https://via.placeholder.com/100',
  },
  {
    id: '3',
    name: 'Margareth Moscardini de Oliveira',
    role: 'CFO',
    imageUrl: 'https://via.placeholder.com/100',
  },
  {
    id: '4',
    name: 'Rodrigo Rodrigues dos Santos Guilherme',
    role: 'Team Leader',
    imageUrl: 'https://via.placeholder.com/100',
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
