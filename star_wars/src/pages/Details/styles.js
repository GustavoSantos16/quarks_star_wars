import styled from 'styled-components/native';

export const Container = styled.View`
  flex:1;
`;

export const Scroll = styled.ScrollView` 
  
`;



export const Header = styled.View`
   width:100%;
   height:60px;
   align-items:center;
   background:#000;
   justify-content:center;
`;

export const TextHeader = styled.Text`
    /* color:#222455; */
    color:#fff;
    font-size:15px;
    font-weight:700;
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
  margin-top: 60px;
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
    margin-bottom: 20px;
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
    margin: 30px auto 0px auto;
    height:auto;
    border-radius:5px;
    margin-bottom: 100px;

    align-items:center;
    justify-content:center;
`;



export const TextBtn = styled.Text`
    color: #fff;
    font-size: 16px;
`;





