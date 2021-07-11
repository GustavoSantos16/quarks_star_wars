import { createAppContainer, createSwitchNavigator } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';

import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Details from './pages/Details';

export default () => createAppContainer(
    createSwitchNavigator({
        Home,
        Favorites,
        Details,
    },
    )
);


