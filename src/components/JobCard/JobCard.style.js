import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#bcbcbc',
    borderRadius: 5,
    backgroundColor: 'white',
    margin: 10,
  },
  body: {
    padding: 5,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 5,
  },

  title: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
  },
  company: {
    color: 'black',
    fontSize: 15,
  },
  location: {
    alignSelf: 'flex-start',
    backgroundColor: '#f44336',
    borderRadius: 40,
  },
  locationText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 10,
    padding: 5,
  },
  level: {
    color: '#f44336',
    fontWeight: 'bold',
  },
});
