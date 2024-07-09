import React from 'react';
import {View} from 'react-native';
import AccordionItem from './AccordionItem';
import styles from '../styles/profileStyles'; // Assuming you have a common styles file

const ServiceCard: React.FC = () => {
  return (
    <View style={styles.cardContainer}>
      <AccordionItem
        title="Lead Mobile Developer"
        content="Lead mobile developer with 10 years of experience."
      />
      <AccordionItem
        title="UX/UI Design"
        content="I'm a UX/UI designer with 5 years of experience."
      />
      <AccordionItem
        title="Machine Learning"
        content="Over 10 years of experience in machine learning."
      />
    </View>
  );
};

export default ServiceCard;
