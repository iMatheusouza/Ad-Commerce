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


const ViewComponent = () => {
  return(
    <MainContainer>
      <ProductImage
        source={{uri: 'https://source.unsplash.com/AQl-J19ocWE/100'}}
      />
      <DescriptionContainer>
        <TitleContainer>
          <ForRentText>
            Apartamento para alugar em:
          </ForRentText>
          <TitleText>
            Título do produto
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
            <Prices >
              $xxx.xx
            </Prices>
          </PricesLabel>
          <PricesLabel>
            <Prices  minorImportant={true}>
              IPTU
            </Prices>
            <Prices  minorImportant={true}>
              $xxx.xx
            </Prices>
          </PricesLabel>
          <PricesLabel>
            <Prices  minorImportant={true}>
              Condomínio
            </Prices>
            <Prices  minorImportant={true}>
              $xxx.xx
            </Prices>
          </PricesLabel>
          <PricesLabel>
            <Prices>
              Total
            </Prices>
            <Prices>
              (Preço total do produto)
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