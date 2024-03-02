import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { DrawerRoutes } from './Drawer';

export function Routes() {
  return (
    <NavigationContainer>
      <DrawerRoutes />
    </NavigationContainer>
  );
}
