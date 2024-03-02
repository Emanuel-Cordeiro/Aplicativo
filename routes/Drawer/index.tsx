import 'react-native-gesture-handler';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Home } from '../src/Screens/Home';
import { Sheets } from '../src/Screens/Sheets';

const { Screen, Navigator } = createDrawerNavigator();

export function DrawerRoutes() {
  return (
    <Navigator>
      <Screen name="Home" component={Home} />

      <Screen name="Planilhas" component={Sheets} />
    </Navigator>
  );
}
