import React, { useState, useEffect } from 'react';
import { Container, FlatList, Item, TextItem, Loading } from './styles';

import api from '../../services/api';


export default function Home() {
    const [people, setPeople] = useState([]);
    const [page, setPage] = useState(1);

    const [loading, setLoading] = useState(false);

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
                    return (
                        <Item>
                            <TextItem>{item.name}</TextItem>
                        </Item>
                    );
                }}
            />
        </Container>
    )
}

