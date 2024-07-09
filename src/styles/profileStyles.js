import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  profileImage: {
    width: 130,
    height: 130,
    borderRadius: 75,
    marginBottom: 20,
    marginTop: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  bio: {
    fontSize: 16,
    textAlign: 'justify',
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  linksContainer: {
    width: '100%',
    marginBottom: 20,
    alignItems: 'center', // Ensures the buttons are centered
  },
  button: {
    width: '90%', // Makes the button take up 90% of the width
    backgroundColor: '#6D41F8',
    paddingVertical: 10,
    borderRadius: 25,
    marginVertical: 5,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
  },
  quote: {
    fontSize: 16,
    fontStyle: 'italic',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 20,
    borderRadius: 25,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: '#555',
  },
  cardContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 30,
  },
});

export default styles;
