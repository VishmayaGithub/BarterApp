import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import { AppTabNavigator } from './AppTabNavigator'
import CustomSideDrawer  from './CustomSideDrawer';
import Settings from '../Screens/Settings'

export const AppDrawerNavigator = createDrawerNavigator( {
    Home : {
    screen : AppTabNavigator
    },
  Settings: {
    screen : Settings  },
  },

  {
    contentComponent: CustomSideDrawer,
  },
  {
    initialRouteName: 'Home',
  }
)
export default AppDrawerNavigator