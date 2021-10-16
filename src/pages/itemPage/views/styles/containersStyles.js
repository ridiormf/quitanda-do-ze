import {StyleSheet} from 'react-native';
import {Colors} from '../../../../constants/colors';
import {LG_SPACE, MD_FONT} from '../../../../constants/metrics';

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
    paddingHorizontal: LG_SPACE,
  },
  button: {
    backgroundColor: Colors.white,
    padding: 14,
    borderRadius: 8,
    elevation: 10,
    marginTop: LG_SPACE,
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  buttonText: {
    color: '#4ab2e3',
    fontSize: MD_FONT,
    fontWeight: 'bold',
  },
});
