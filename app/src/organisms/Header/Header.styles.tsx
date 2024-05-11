import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 12,
    alignItems: 'center',
  },
  avatarContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  avatar: {
    height: 50,
    width: 50,
    borderRadius: 50,
    objectFit: 'cover',
    alignItems: 'center',
  },
  textLight: {
    fontSize: 16,
    color: 'grey',
    marginBottom: 2,
  },
  textBold: {
    fontSize: 20,
    color: '#000',
    fontWeight: '500',
  },
  iconContainer: {flexDirection: 'row', gap: 16},
});

export default styles;
