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
  height: 40px;
  margin: 1px 0px;
  padding: 10px;

  display: flex;
  justify-content: center;
`;

export const TextItem = styled.Text`
  color: #fff;
`;

export const Loading = styled.ActivityIndicator.attrs({
  size: 'small',
  color: '#999',
})`
  margin:20px 0;
`;