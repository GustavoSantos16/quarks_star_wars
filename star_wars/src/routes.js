import { createAppContainer, createSwitchNavigator, } from 'react-navigation';

import Home from './pages/Home';
import Details from './pages/Details';

export default () => createAppContainer(
    createSwitchNavigator({
        Home,
        Details,
    },
    )
);


