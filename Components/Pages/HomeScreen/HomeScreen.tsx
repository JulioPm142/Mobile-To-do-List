import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen: React.FC = () => {
  const navigation = useNavigation();

  const navigateToNewPage = () => {
    navigation.navigate('NewPage' as never); // This should match the name you gave to your new page in AppNavigator
  };

  return (
    <View>
      <Text>This is the Home Screen</Text>
      <Button title="Go to New Page" onPress={navigateToNewPage} />
    </View>
  );
};

export default HomeScreen;
