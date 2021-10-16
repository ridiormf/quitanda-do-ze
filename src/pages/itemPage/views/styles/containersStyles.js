import {StyleSheet} from 'react-native';
import {Colors} from '../../../../constants/colors';

export const loginContainerStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.mainBlue,
  },
  contentContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 32,
  },

  input: {
    backgroundColor: Colors.white,
    alignSelf: 'stretch',
    borderRadius: 8,
    elevation: 10,
    marginVertical: 8,
    paddingHorizontal: 24,
  },
  button: {
    backgroundColor: Colors.white,
    padding: 14,
    borderRadius: 8,
    elevation: 10,
    marginTop: 24,
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  buttonText: {
    color: '#4ab2e3',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
