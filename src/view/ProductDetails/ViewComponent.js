import React from 'react'
import {Text} from 'react-native'
import {
  MainContainer,
  ProductImage,
  DescriptionContainer,
  TitleContainer,
  ForRentText,
  TitleText,
  PublishedAgo,
  PricesContainer,
  PricesLabel,
  Prices,
  Footer,
  ButtonContainer,
  ButtonText
} from './styles'


const ViewComponent = ({
  product
}) => {
  return(
    <MainContainer>
      <ProductImage
        source={{uri: product.image}}
      />
      <DescriptionContainer>
        <TitleContainer>
          <ForRentText>
            Apartamento para alugar em:
          </ForRentText>
          <TitleText>
            {product.title}
          </TitleText>
          <PublishedAgo>
            Publicado há 2 meses
          </PublishedAgo>
        </TitleContainer>

        <PricesContainer>
          <PricesLabel>
            <Prices >
              Aluguel
            </Prices>
            <Prices>
              $xx.xx
            </Prices>
          </PricesLabel>
          <PricesLabel>
            <Prices >
              IPTU
            </Prices>
            <Prices >
              $xx.xx
            </Prices>
          </PricesLabel>
          <PricesLabel>
            <Prices >
              Condomínio
            </Prices>
            <Prices >
              $xx.xx
            </Prices>
          </PricesLabel>
          <PricesLabel>
            <Prices mostImportant={true}>
              Total
            </Prices>
            <Prices mostImportant={true}>
              {'$' + product.value}
            </Prices>
          </PricesLabel>
        </PricesContainer>
      </DescriptionContainer>

      <Footer>
        <ButtonContainer>
          <ButtonText>
            Contate o Vendedor
          </ButtonText>
        </ButtonContainer>
      </Footer>
    </MainContainer>
  )
}

export default ViewComponent