import React from 'react';
import {View, Text, Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './Header.styles';

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          }}
          style={styles.avatar}
        />
        <View>
          <Text style={styles.textLight}>Good morning</Text>
          <Text style={styles.textBold}>Alisa Drew</Text>
        </View>
      </View>
      <View style={styles.iconContainer}>
        <Ionicons name="notifications-outline" size={28} />
        <Ionicons name="bookmark-outline" size={28} />
      </View>
    </View>
  );
};

export default Header;
