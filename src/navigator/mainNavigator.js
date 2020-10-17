import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import EmailAuth26147131Navigator from '../features/EmailAuth26147131/navigator';
import Settings27147130Navigator from '../features/Settings27147130/navigator';
import SignUp128147129Navigator from '../features/SignUp128147129/navigator';
import SignIn21146729Navigator from '../features/SignIn21146729/navigator';
import UserProfile2146728Navigator from '../features/UserProfile2146728/navigator';
import Tutorial4146726Navigator from '../features/Tutorial4146726/navigator';
import NotificationList6146724Navigator from '../features/NotificationList6146724/navigator';
import Settings146690Navigator from '../features/Settings146690/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
EmailAuth26147131: { screen: EmailAuth26147131Navigator },
Settings27147130: { screen: Settings27147130Navigator },
SignUp128147129: { screen: SignUp128147129Navigator },
SignIn21146729: { screen: SignIn21146729Navigator },
UserProfile2146728: { screen: UserProfile2146728Navigator },
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
