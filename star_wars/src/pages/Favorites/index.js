import React, { useState, useEffect } from 'react';
import { Container, FlatList, Item, TextItem, Loading, ImagePerson } from './styles';
import { BackHandler } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import BottomNavigate from '../../components/BottomNavigate';

export default function Favorites({ navigation }) {
    const [people, setPeople] = useState([]);

    const [loading, setLoading] = useState(false);


    function seeDetails(url) {
        var params = {
            id: url.split("/")[5]
        }
        navigation.navigate('Details', { params });
    }

    async function loadPeople() {

        if (loading) {
            return;
        }

        setLoading(true);

        try {
            AsyncStorage.getItem('@favorites').then((people) => {
                const p = people ? JSON.parse(people) : [];
                setPeople(p);
            });
        } catch (e) {
            // saving erro
        }

        setLoading(false);
    }

    useEffect(() => {
        loadPeople();
        const backAction = () => {
            navigation.navigate('Home');
            return true;
        };

        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            backAction
        );

        return () => backHandler.remove();
    }, [])

    return (
        <Container>
            <FlatList
                data={people}
                onEndReached={() => loadPeople()}
                onEndReachedThreshold={0.2}
                ListFooterComponent={loading && <Loading />}
                keyExtractor={item => String(item.name)}
                renderItem={({ item }) => {
                    let id = item.url.split("/")[5];

                    return (
                        <Item onPress={() => seeDetails(item.url)}>
                            <ImagePerson source={{ uri: `https://starwars-visualguide.com/assets/img/characters/${id}.jpg` }}>
                            </ImagePerson>
                            <TextItem>{item.name}</TextItem>
                        </Item>
                    );
                }}
            />
            <BottomNavigate selected="favorites" openHome={() => navigation.navigate('Home')}></BottomNavigate>
        </Container>
    )
}
