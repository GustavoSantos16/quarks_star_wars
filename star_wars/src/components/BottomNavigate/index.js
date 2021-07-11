import React from 'react';

import { Container, Item, TextScreen } from './styles';

import Icon from 'react-native-vector-icons/Ionicons';

export default function BottomNavigate({ openHome, openFavorites, selected }) {
    return (
        <Container>

            <Item onPress={openHome}>
                <Icon name="home-outline" size={28} color={(selected == "home" ? "#fff" : "#666")} />
                <TextScreen style={{ color: (selected == "home" ? "#fff" : "#666") }}>Home</TextScreen>
            </Item>

            <Item onPress={openFavorites}>
                <Icon name="heart-outline" size={28} color="#fff" color={(selected == "favorites" ? "#fff" : "#666")} />
                <TextScreen style={{ color: (selected == "favorites" ? "#fff" : "#666") }}>Favorites</TextScreen>
            </Item>

        </Container>
    );
}

