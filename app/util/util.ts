export const priceDisplay = (priceInCents: number) => {
    return `$${priceInCents/100}`
  }
  
  /**
 * Dubai Mall / Burj Khalifa
 */
export const DEFAULT_CORDS = {
  latitude: 25.1972,
  longitude: 55.274283,
};


  export const apiHost = 'https://revamp.rakbank.ae/'
  export const featuredDeals = 'api/getDeals?bankId=RAK&channelId=MB&mode=HTML&userSegment=featured&pageContext=Offers'
  export const nearByDeals = 'api/getDeals?bankId=RAK&channelId=MB&mode=HTML&userSegment=&pageContext=Offers'