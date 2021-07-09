import React, { useState, useEffect } from 'react';
import { Container, FlatList, Item, TextItem, Loading, ImagePerson } from './styles';

import api from '../../services/api';


export default function Home({ navigation }) {
    const [people, setPeople] = useState([]);
    const [page, setPage] = useState(1);

    const [loading, setLoading] = useState(false);


    function seeDetails(url) {
        var param = {
            url: url
        }
        navigation.navigate('Details', { param });
    }

    async function loadPeople(pageNumber = page, shouldRefresh = false) {

        if (loading) {
            return;
        }

        setLoading(true);

        try {
            const response = await api.get(`/?page=${pageNumber}`);
            setPeople(shouldRefresh ? response['data']['results'] : [...people, ...response['data']['results']]);
            setPage(pageNumber + 1);
            setLoading(false);
        } catch (error) {
            setLoading(false);
        }
    }

    useEffect(() => {
        loadPeople(1, false);
    }, [])

    return (
        <Container>
            <FlatList
                data={people}
                onEndReached={() => loadPeople(page, false)}
                onEndReachedThreshold={0.2}
                // onRefresh={refreshList}
                // refreshing={refreshing}
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
        </Container>
    )
}

