import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    width: Dimensions.get('window').width / 2.5,
    height: 40,
    margin: 10,
    borderRadius: 5,
    backgroundColor: '#f44336',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  text: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 5,
  },
});
