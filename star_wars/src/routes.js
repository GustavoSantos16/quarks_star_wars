import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './pages/Home';
import Details from './pages/Details';

export default () => createAppContainer(
    createStackNavigator({
        Home,
        Details,
    },
    )
);


