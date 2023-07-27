import React from 'react';
import {View, Text, TouchableOpacity, Linking, Image} from 'react-native';
import profile from '../../assets/profile.jpeg';
import useStyles from './Profile.styles';

function Profile() {
  const styles = useStyles();
  const handleLinkPress = (url: any) => {
    Linking.canOpenURL(url)
      .then(supported => {
        if (supported) {
          return Linking.openURL(url);
        } else {
          console.log('Cannot open the URL');
        }
      })
      .catch(err => console.error('An error occurred', err));
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={profile} style={styles.image} />
      </View>
      <Text style={styles.name}>Venkatesh Murali</Text>
      <TouchableOpacity
        onPress={() => handleLinkPress('https://venkateshmurali.com')}>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Website:</Text>
          <Text style={styles.link}>https://venkateshmurali.com</Text>
        </View>
      </TouchableOpacity>

      <View style={styles.infoContainer}>
        <Text style={styles.label}>Mail:</Text>
        <Text style={styles.link}>venkateshmuralikrish@gmail.com</Text>
      </View>

      <TouchableOpacity
        onPress={() => handleLinkPress('https://github.com/Venkatesh157')}>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Github:</Text>
          <Text style={styles.link}>https://github.com/Venkatesh157</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default Profile;
