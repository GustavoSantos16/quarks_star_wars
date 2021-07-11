import React from 'react';

import { Container, Item, TextScreen } from './styles';

import Icon from 'react-native-vector-icons/Ionicons';

export default function BottomNavigate({ openHome, openFavorites, selected }) {
    return (
        <Container>

            <Item onPress={openHome}>
                <Icon name="home-outline" size={28} color={(selected == "home" ? "#ffe81f" : "#666")} />
                <TextScreen style={{ color: (selected == "home" ? "#ffe81f" : "#666") }}>Home</TextScreen>
            </Item>

            <Item onPress={openFavorites}>
                <Icon name="heart-outline" size={28} color="#ffe81f" color={(selected == "favorites" ? "#ffe81f" : "#666")} />
                <TextScreen style={{ color: (selected == "favorites" ? "#ffe81f" : "#666") }}>Favorites</TextScreen>
            </Item>

        </Container>
    );
}

