import {StyleSheet} from 'react-native';
import {Colors} from '../../../../constants/colors';
import {LG_SPACE} from '../../../../constants/metrics';

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
});
