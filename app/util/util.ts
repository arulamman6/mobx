export const priceDisplay = (priceInCents: number) => {
    return `$${priceInCents/100}`
  }
  
  export const apiHost = 'https://revamp.rakbank.ae/'
  export const featuredDeals = 'api/getDeals?bankId=RAK&channelId=MB&mode=HTML&userSegment=featured&pageContext=Offers'
  export const nearByDeals = 'api/getDeals?bankId=RAK&channelId=MB&mode=HTML&userSegment=&pageContext=Offers'