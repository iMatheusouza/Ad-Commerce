import styled from 'styled-components'

export const MainContainer = styled.ScrollView`
  flex: 1;
  `

export const ProductImage = styled.Image`
  width: 100%;
  height: 288px;
  margin-bottom: 32px;
`
export const DescriptionContainer = styled.View`
  padding: 0 16px;
`

export const TitleContainer = styled.View`
  margin-bottom: 16px;
`

export const ForRentText = styled.Text`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 8px;
` 

export const TitleText = styled.Text`
  font-size: 16px;
  margin-bottom: 4px;
`
export const PublishedAgo = styled.Text`
  font-size: 12px;
  color: rgba(0,0,0,.54);
`

export const PricesContainer = styled.View``

export const PricesLabel = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 4px;
`

export const Prices = styled.Text`
 font-size: ${props => props.mostImportant ? '16px' : '14px'};
 color: ${props => props.mostImportant ? 'green' : 'rgb(117, 117, 117)'};
` 

export const Footer = styled.View`
  flex: 1;
  padding: 24px 16px;
`

export const ButtonContainer = styled.TouchableOpacity`
  background: #5063f0;
  padding: 20px 0;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`

export const ButtonText = styled.Text`
  color: #FFF;
  font-size: 16px;
  font-weight: bold;
` 