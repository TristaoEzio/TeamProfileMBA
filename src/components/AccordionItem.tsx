import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  LayoutAnimation,
  StyleSheet,
  Dimensions,
} from 'react-native';

interface AccordionItemProps {
  title: string;
  content: string;
  color?: string;
}

const AccordionItem: React.FC<AccordionItemProps> = ({title, content}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleAccordion = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setIsExpanded(!isExpanded);
  };

  const renderIcon = (): JSX.Element => {
    return isExpanded ? (
      <Image
        source={require('../assets/images/minusIcon.png')}
        style={styles.icon}
      />
    ) : (
      <Image
        source={require('../assets/images/plusIcon.png')}
        style={styles.icon}
      />
    );
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={toggleAccordion}
        accessible={true}
        accessibilityLabel={`Toggle ${title}`}>
        <View style={styles.header}>
          {renderIcon()}
          <Text style={styles.title}>{title}</Text>
        </View>
      </TouchableOpacity>
      {isExpanded && (
        <View style={styles.content}>
          <Text>{content}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width - 40,
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 2,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 20,
    color: '#6D41F8',
  },
  content: {
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  icon: {
    width: 30,
    height: 30,
  },
});

export default AccordionItem;
