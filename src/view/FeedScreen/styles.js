import styled from 'styled-components'

export const MainContainer = styled.View`
  flex: 1;
  align-items: center;
  padding-left: 24px; 
` 

export const ItemLabel = styled.View`
background: #f5f5f5;
  elevation: 20;
  margin: 8px 0px;
  border-bottom-left-radius: 4px;
  border-top-left-radius: 4px;
  width: 100%;

` 

export const ItemDescription = styled.View`
  height: 115px;
  padding: 0 16px;
` 

export const ItemImage = styled.Image`
  width: 100%;
  height: 230px;
  border-top-left-radius: 4px;
` 

export const ItemTitle = styled.Text`
  font-size: 16px;
` 

export const ItemPriceContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  flex: 1;  
  margin-top: 8px;
` 

export const ItemPriceRent = styled.Text`
  font-size: 16px;
  color: green;
` 

export const ItemPremium = styled.Text`
  color: grey;
`  

export const ItemType = styled.Text`
  margin: 8px 0 8px 0;
  color: rgb(66, 66, 66);
` 

export const ItemLocalization = styled.Text`` 


