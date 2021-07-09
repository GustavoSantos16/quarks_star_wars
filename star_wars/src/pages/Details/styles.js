import styled from 'styled-components/native';

export const Container = styled.View`
  flex:1;
`;

export const ImagePerson = styled.ImageBackground`
  width:100%;
  height: 100%;
`;

export const ImageMinor = styled.Image`
  width:140px;
  height: 180px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 80px;
`;


export const Info = styled.View`
  background-color: rgba(0,0,0,0.88);
  width: 100%;
  height: 100%;
  padding: 0px 12px;
  /* margin-top: 30%; */
`;

export const Name = styled.Text`
    color:#FFF;
    margin:0 auto;
    font-size: 22px;
    margin-bottom: 40px;
`;

export const BoxData = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 4px 0px;
`;

export const TextData = styled.Text`
    color:#FFF;
`;

export const BtnFavorite = styled.TouchableOpacity`
    background-color: #ffe81f;
    width: 80%;
    margin: 50px auto 0px auto;
    height: 50px;
    border-radius:5px;

    align-items:center;
    justify-content:center;
`;



export const TextBtn = styled.Text`
    color: #000;
    font-size: 18px;
    font-weight: bold;
`;





