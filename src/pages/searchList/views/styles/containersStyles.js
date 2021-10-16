import {StyleSheet} from 'react-native';
import {Colors} from '../../../../constants/colors';
import {
  LG_FONT,
  LG_SPACE,
  MD_FONT,
  MD_SPACE,
} from '../../../../constants/metrics';

export const searchListContainerStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  contentContainer: {
    flexGrow: 1,
    padding: LG_SPACE,
  },
  categoriesLoadingContainer: {
    height: 110,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    alignSelf: 'stretch',
  },
  categoriesContainer: {
    marginHorizontal: -LG_SPACE,
    marginBottom: LG_SPACE,
  },
  categoriesContentContainer: {
    paddingHorizontal: MD_SPACE,
    flexDirection: 'row',
  },
  categoriesTitle: {
    fontSize: LG_FONT,
    color: Colors.mainBlue,
    marginBottom: MD_SPACE,
  },
  productsContainer: {
    alignItems: 'center',
    marginTop: LG_SPACE,
    marginHorizontal: -LG_SPACE,
    paddingHorizontal: LG_SPACE,
    paddingVertical: MD_SPACE,
    marginBottom: -LG_SPACE,
    backgroundColor: Colors.mainBlue,
    flexGrow: 1,
    borderTopEndRadius: 50,
    borderTopStartRadius: 50,
  },
  productsTitle: {
    fontSize: LG_FONT,
    color: Colors.white,
    marginBottom: MD_SPACE,
    alignSelf: 'center',
  },
  productsItemsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'stretch',
    flexWrap: 'wrap',
    flexGrow: 1,
  },
  productsLoadingContainer: {
    alignSelf: 'stretch',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  inputContainer: {
    backgroundColor: Colors.white,
    alignSelf: 'stretch',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 12,
    borderColor: Colors.gray,
    borderWidth: 1,
    marginVertical: 8,
    paddingRight: LG_SPACE,
    paddingLeft: MD_SPACE,
  },
  input: {
    flex: 1,
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
