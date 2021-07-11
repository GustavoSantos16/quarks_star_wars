import styled from 'styled-components/native';

export const Container = styled.View`
  width:100%;
  height:60px;
  background:#000;
  justify-content:center;

  flex-direction:row;
`;

export const Item = styled.TouchableOpacity.attrs({
  activeOpacity: 1,
})`
  width:50%;
  height:100%;
  /* background:#000; */

  flex-direction:column;
  align-items:center;
  justify-content:center;
`;

export const TextScreen = styled.Text`
    font-size:10px;
    font-weight:bold;
    /* color:#6E7FAA; */
    color:#aaa;
`;



