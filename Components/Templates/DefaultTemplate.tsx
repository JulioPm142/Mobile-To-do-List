import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const DefaultTemplate: React.FC = () => {
  const navigation = useNavigation();

  const navigateToHomeScreen = () => {
    navigation.navigate('Home' as never); // Explicitly specify the type for 'Home'
  };

  return (
    <View>
      <Text>This is the Default Template</Text>
      <Button title="Go to Home Screen" onPress={navigateToHomeScreen} />
    </View>
  );
};

export default DefaultTemplate;
