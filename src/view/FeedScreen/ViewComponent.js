import React, { Component } from 'react';
import {View, Text} from 'react-native'
import {
  MainContainer,
  ItemLabel,
  ItemImage,
  ItemTitle,
  ItemPriceRent,
  ItemPremium,
  ItemDescription,
  ItemType,
  ItemLocalization,
  ItemPriceContainer
} from './styles'


const ViewComponent = ({
  title, 
  price, 
  imageSource,
  itemId
}) => {
    return(
      <MainContainer>
        <ItemLabel>
          <ItemImage
            source={{uri: imageSource}}
            resizeMode={'cover'}
          />
          <ItemDescription>
            <ItemType>
              Apartamento
            </ItemType>
            <ItemLocalization>
              Localização:
            </ItemLocalization>
            <ItemTitle>
              {title}
            </ItemTitle>
            <ItemPriceContainer>
              <ItemPriceRent>
                {price}
              </ItemPriceRent>
              <ItemPremium>
                {itemId % 2 == 0 ? 'Premium' : 'Regular'}
              </ItemPremium>
            </ItemPriceContainer>
            
          </ItemDescription>
          
        </ItemLabel>
      </MainContainer>
    )
}

export default ViewComponent
