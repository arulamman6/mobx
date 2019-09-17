import NearByDeals from '../models/NearByDeal'
import Location from '../models/Locations/Location'
import {getDistance} from './LocationUtil'
export const getOffersWithoutOnlineStore = (
    NearByDealList: NearByDeals[]
  ): NearByDeals[] => {
    return NearByDealList.filter(
      (NearByDeal: NearByDeals) =>
        parseFloat(NearByDeal.onLangitude as string) &&
        parseFloat(NearByDeal.onLatitude as string)
    );
  };
  
// calculateandand apply distance
  export const calculateAndApplyDistance = (
    NearByDealList: NearByDeals[],
    currentLocation: Location
  ): NearByDeals[] => {
    return NearByDealList.map((offerObj) => {
      let NearByDeal: NearByDeals = { ...offerObj };
      if (!NearByDeal.isOnlineStore) {
        NearByDeal.onLangitude = parseFloat(NearByDeal.onLangitude as string);
        NearByDeal.onLatitude = parseFloat(NearByDeal.onLatitude as string);
        let NearByDealLocation: Location = {
          longitude: NearByDeal.onLangitude,
          latitude: NearByDeal.onLatitude,
      }
        NearByDeal.distance = getDistance(NearByDealLocation, currentLocation);
      }
      return NearByDeal;
    });
  };

  
  
  

  

  