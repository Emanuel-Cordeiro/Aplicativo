import React from 'react';
import { Button, Text, View } from 'react-native';

type StackParamList = {
  Home: undefined;
  Sheets: undefined;
};

type StackProps = NativeStackScreenProps<StackParamList, 'Home'>;

type Props = {
  routes: StackProps;
};

export function Home({ navigation }) {
  const handleClick = () => {
    navigation.navigate('Sheets');
  };

  return (
    <View>
      <Text>Home</Text>
      <Button title="Planilhas" onPress={handleClick} />
    </View>
  );
}
