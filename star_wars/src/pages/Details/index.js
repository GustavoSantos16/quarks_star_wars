import React, { useState, useEffect } from 'react';
import { BackHandler, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../services/api';

import Icon from 'react-native-vector-icons/Ionicons';

import { Container, ImagePerson, ImageMinor, Info, Name, BoxData, TextData, BtnFavorite, TextBtn } from './styles';

export default function Details({ navigation }) {
    const params = navigation.getParam('params');

    const [person, setPerson] = useState('');
    const [loading, setLoading] = useState(false);
    const [favorite, setFavorite] = useState(false);

    async function loadPerson() {
        setLoading(true);

        const response = await api.get(`/${params.id}`);
        setPerson(response['data']);

        setLoading(false);
        verifyFavorite(response['data']);
    }

    useEffect(() => {
        loadPerson();
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


    function verifyFavorite(value) {
        try {
            AsyncStorage.getItem('@favorites').then((person) => {
                const p = person ? JSON.parse(person) : [];
                //Verificando se já existe no array de favoritos
                var verifyPerson = p.find((el) => {
                    return el.name === value.name
                })

                if (verifyPerson != undefined) {
                    setFavorite(true);
                } else {
                    setFavorite(false);
                }


            });
        } catch (e) {
            // saving error
        }
    }


    const addFavorite = async (value) => {
        try {
            AsyncStorage.getItem('@favorites')
                .then((person) => {
                    const p = person ? JSON.parse(person) : [];
                    //Verificando se já existe no array de favoritos
                    if (p.find(function (el) { return el.name === value.name }) === undefined) {
                        p.push(value);
                        AsyncStorage.setItem('@favorites', JSON.stringify(p));
                    } else {

                        var filtered = p.filter(function (el, index, arr) {
                            return el.name != value.name
                        });

                        AsyncStorage.setItem('@favorites', JSON.stringify(filtered));

                    }


                    if (favorite) {
                        setFavorite(false);
                    } else {
                        setFavorite(true);
                    }

                });
        } catch (e) {
            // saving error
        }
    }



    return (

        <>
            {loading === true && (
                <ActivityIndicator size="large" color="#ffe81f" style={{ flex: 1, width: '100%', backgroundColor: '#111' }} />
            )}
            {loading === false && (
                <ImagePerson source={{ uri: `https://starwars-visualguide.com/assets/img/characters/${params.id}.jpg` }}>

                    <Container>

                        <Info>
                            <ImageMinor source={{ uri: `https://starwars-visualguide.com/assets/img/characters/${params.id}.jpg` }}>
                            </ImageMinor>

                            <Name>
                                {person.name}
                            </Name>

                            <BoxData>
                                {/* <Icon></Icon> */}
                                <TextData>Height: </TextData>
                                <TextData>{person.height}</TextData>
                            </BoxData>

                            <BoxData>
                                {/* <Icon></Icon> */}
                                <TextData>Mass: </TextData>
                                <TextData>{person.mass}</TextData>
                            </BoxData>

                            <BoxData>
                                {/* <Icon></Icon> */}
                                <TextData>Hair Color: </TextData>
                                <TextData>{person.hair_color}</TextData>
                            </BoxData>

                            <BoxData>
                                {/* <Icon></Icon> */}
                                <TextData>Skin Color: </TextData>
                                <TextData>{person.skin_color}</TextData>
                            </BoxData>

                            <BoxData>
                                {/* <Icon></Icon> */}
                                <TextData>Eye Color: </TextData>
                                <TextData>{person.eye_color}</TextData>
                            </BoxData>

                            <BoxData>
                                {/* <Icon></Icon> */}
                                <TextData>Birth Year: </TextData>
                                <TextData>{person.birth_year}</TextData>
                            </BoxData>

                            <BoxData>
                                {/* <Icon></Icon> */}
                                <TextData>Gender: </TextData>
                                <TextData>{person.gender}</TextData>
                            </BoxData>


                            <BtnFavorite onPress={() => addFavorite(person)}>
                                <Icon name={(favorite === false) ? 'heart-outline' : 'heart'} size={82} color="#ffe81f" />
                                <TextBtn>{(favorite === false) ? 'Add to favorites' : ''}</TextBtn>
                            </BtnFavorite>
                        </Info>
                    </Container>

                </ImagePerson>
            )}
        </>
    )
}

Details.navigationOptions = {
    title: 'Details',
    headerStyle: {
        backgroundColor: '#111',
    },
    headerTintColor: '#ffffff',
    headerTitleStyle: {
        color: "#FFF"
    },

}
