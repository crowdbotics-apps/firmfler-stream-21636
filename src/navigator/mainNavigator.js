import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Tutorial4146726Navigator from '../features/Tutorial4146726/navigator';
import NotificationList6146724Navigator from '../features/NotificationList6146724/navigator';
import Settings146690Navigator from '../features/Settings146690/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Tutorial4146726: { screen: Tutorial4146726Navigator },
NotificationList6146724: { screen: NotificationList6146724Navigator },
Settings146690: { screen: Settings146690Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
