import NearByDeals from '../models/NearByDeal'
import { DEFAULT_CORDS } from '../util/util'

export const getOffersWithoutOnlineStore = (
    NearByDealList: NearByDeals[]
  ): NearByDeals[] => {
    return NearByDealList.filter(
      (NearByDeal: NearByDeals) =>
        parseFloat(NearByDeal.onLangitude as string) &&
        parseFloat(NearByDeal.onLatitude as string)
    );
  };

  export const calculateDistanceFromCurrentLocation = (
    NearByDealList: NearByDeals[],
    currentLocation: Location
  ): NearByDeals[] => {
    return NearByDealList.map((offerObj) => {
      let NearByDeal: NearByDeals = { ...offerObj };
      if (!NearByDeal.isOnlineStore) {
        NearByDeal.onLangitude = parseFloat(NearByDeal.onLangitude as string);
        NearByDeal.onLatitude = parseFloat(NearByDeal.onLatitude as string);
  
        NearByDeal.distance = getDistance(NearByDeal, currentLocation);
      }
      return NearByDeal;
    });
  };

  export function getDistance(locationA: NearByDeals, locationB: Location) {
    let { onLatitude: lat1, onLangitude: lon1 } = locationA;
    const { latitude: lat2, longitude: lon2 } = locationB;
    const unit = 'M';
  
    var radiousLat1 = (Math.PI * <number>lat1) / 180;
    var radiouslat2 = (Math.PI * lat2) / 180;
    var theta = <number>lon1 - lon2;
    var radiousTheta = (Math.PI * theta) / 180;
    var dist =
      Math.sin(radiousLat1) * Math.sin(radiouslat2) +
      Math.cos(radiousLat1) * Math.cos(radiouslat2) * Math.cos(radiousTheta);
    if (dist > 1) {
      dist = 1;
    }
    dist = Math.acos(dist);
    dist = (dist * 180) / Math.PI;
    dist = dist * 60 * 1.1515;
    dist = dist * 1.609344;
    // if (unit == "N") { dist = dist * 0.8684; }
    return +dist.toFixed(1);
  }
  

  export const getLatLongFromPosition = (position: GeoPosition): Location => {
    let latLong: Location = DEFAULT_CORDS;
  
    const {
      coords: { latitude, longitude },
    } = position;
  
    if (latitude && longitude) {
      latLong = { latitude, longitude };
    }
  
    return latLong;
  };

  
  export interface GeoCoordinates {
    latitude?: number
    longitude?: number
    accuracy?: number
    altitude?: number
    heading?: number
    speed?: number
    altitudeAccuracy?: number
  }

  export interface GeoPosition {
    coords: GeoCoordinates
    timestamp: Date
  }

  export type Location = {
    latitude: number;
    longitude: number;
  }