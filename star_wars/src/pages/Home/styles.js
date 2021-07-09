import styled from 'styled-components/native';

export const Container = styled.View`
  flex:1;
`;

export const FlatList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: true,
})`
  flex:1;
  background:#111;
`;



export const Item = styled.TouchableOpacity`
  width: 100%;
  height: 80px;
  margin: 1px 0px;
  padding: 5px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;


export const ImagePerson = styled.Image`
 width:45px;
 height:100%;
 background:#222;
`;

export const TextItem = styled.Text`
  color: #fff;
  font-size: 15px;
  margin-left: 5px;
`;




export const Loading = styled.ActivityIndicator.attrs({
  size: 'small',
  color: '#999',
})`
  margin:20px 0;
`;