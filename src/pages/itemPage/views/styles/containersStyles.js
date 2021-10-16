import {StyleSheet} from 'react-native';
import {Colors} from '../../../../constants/colors';
import {
  LG_FONT,
  LG_SPACE,
  MD_SPACE,
  SM_SPACE,
  XL_FONT,
  XL_SPACE,
} from '../../../../constants/metrics';

const HEADER_SIZE = 200;

export const itemPageContainerStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },

  img: {
    height: HEADER_SIZE,
    alignSelf: 'stretch',
    position: 'absolute',
  },

  imgInfos: {
    padding: LG_SPACE,
    height: HEADER_SIZE,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: Colors.darkOpacity,
  },
  iconButton: {
    position: 'absolute',
    top: MD_SPACE,
    left: MD_SPACE,
  },
  title: {
    fontSize: XL_FONT,
    color: Colors.white,
    textShadowColor: Colors.darkerOpacity,
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 2,
  },
  contentContainer: {
    flexGrow: 1,
    paddingHorizontal: LG_SPACE,
    paddingBottom: XL_SPACE,
  },

  contentRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
  },
  content: {
    alignItems: 'center',
  },

  contentTitle: {
    fontSize: LG_FONT,
    marginTop: XL_SPACE,
    marginBottom: SM_SPACE,
    color: Colors.text,
  },
  cartButton: {
    backgroundColor: Colors.black,
    position: 'absolute',
    bottom: LG_SPACE,
    right: LG_SPACE,
    elevation: 5,
  },
});
