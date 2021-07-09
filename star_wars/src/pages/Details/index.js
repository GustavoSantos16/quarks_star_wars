import React, { useState, useEffect } from 'react';
import { BackHandler, Button } from 'react-native';
import api from '../../services/api';

import { Container, ImagePerson, ImageMinor, Info, Name, BoxData, TextData, BtnFavorite, TextBtn } from './styles';

export default function Details({ navigation }) {
    const params = navigation.getParam('params');

    const [person, setPerson] = useState('');
    const [loading, setLoading] = useState(false);

    async function loadPerson() {
        setLoading(true);

        const response = await api.get(`/${params.id}`);
        setPerson(response['data']);
        console.log(response['data']);

        setLoading(false);
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


    return (
        <ImagePerson source={{ uri: `https://lh3.googleusercontent.com/proxy/3eY70qHnypiEWQxReFg3CtVRXmGhxU9BL23lrsslNG-VTix1KqnRsMDtDVPQ7p7PqKHMYeyxGnxY5wTVY2gbwiicys_EKOk5yi0-wkYuhoN9TJ_U1ux4nc0m-Lny82GFq1tVkZnF25lQ8i9DaI2YQpV2211TLBdw` }}>
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

                    <BtnFavorite>
                        <TextBtn>Favoritar</TextBtn>
                    </BtnFavorite>
                </Info>
            </Container>

        </ImagePerson>
    )
}

