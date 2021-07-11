import React, { useState, useEffect } from 'react';
import { Container, Header, TextHeader, FlatList, Item, TextItem, Loading, ImagePerson } from './styles';

import api from '../../services/api';

import BottomNavigate from '../../components/BottomNavigate';


export default function Home({ navigation }) {
    const [people, setPeople] = useState([]);
    const [page, setPage] = useState(1);

    const [loading, setLoading] = useState(false);


    function seeDetails(url) { //Navegar até a pagina detalhes
        var params = {
            id: url.split("/")[5], //Id do personagem
            screen: 'Home'//tela de partida, serve para voltar a origem ao clicar em voltar em detalhes
        }
        navigation.navigate('Details', { params });
    }

    //Carregar a lista de personagens a partir da api e realizar a paginação
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
        <>
            <Header>
                <TextHeader>Home</TextHeader>
            </Header>
            <Container>

                <FlatList
                    data={people}
                    onEndReached={() => loadPeople(page, false)}
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
                <BottomNavigate selected="home" openFavorites={() => navigation.navigate('Favorites')}></BottomNavigate>
            </Container>
        </>
    )
}


