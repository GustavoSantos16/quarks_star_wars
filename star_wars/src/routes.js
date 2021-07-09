import { createAppContainer, createSwitchNavigator, } from 'react-navigation';

import Home from './pages/Home';

export default () => createAppContainer(
    createSwitchNavigator({
        Home,
    },
    )
);


