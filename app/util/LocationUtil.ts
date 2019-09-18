import {
  Animated,
} from 'react-native';
import { Region } from 'react-native-maps';

import Location from '../models/Locations/Location'
import GeoPosition from '../models/Locations/GeoPosition'

/*export const priceDisplay = (priceInCents: number) => {
    return `$${priceInCents/100}`
  }*/
  
  /**
 * Dubai Mall / Burj Khalifa
 */
export const DEFAULT_CORDS = {
  latitude: 25.1972,
  longitude: 55.274283,
};

export type MapMarkerItem = {
  cord: Location;
  offerKey: string;
};

export type MapViewState = {
  userLocation: Location;
  markerLocations: MapMarkerItem[];
  mapViewDelta?: {
    latitudeDelta: number;
    longitudeDelta: number;
  };
  selectedMarker?: string;
  mapViewOpacity?: Animated.Value;
};

export type BasicOfferItem = {
  onOfferName: string;
  onDealTitle: string;
  onCityName: string;
  onAreaName: string;
  onExpiry: string;
  onLatitude: string | number;
  onLangitude: string | number;
  onTelephone: string;
  onCategoryName: string;
  OnDescription: string;
};

export type OfferItem = BasicOfferItem & {
  distance: number;
  isOnlineStore?: boolean;
};

export function getDistance(locationA: Location, locationB: Location) {
  let { latitude: lat1, longitude: lon1 } = locationA;
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

export const getTopTenMarkerWithZoomLevel = (
  offers: OfferItem[],
  userLocation: Location
): MapViewState => {
  let topTenOffers = offers.slice(0, 10);

  let otherOffers = offers.slice(10, 35);

  const topTenMarkerLocations: MapMarkerItem[] = topTenOffers.map(
    (offer: OfferItem) => {
      let cord: Location = {
        latitude: <number>offer.onLatitude,
        longitude: <number>offer.onLangitude,
      };
      let offerKey: string = offer.onOfferName;
      return { cord, offerKey };
    }
  );

  const otherMarkerLocations: MapMarkerItem[] = otherOffers.map(
    (offer: OfferItem) => {
      let cord: Location = {
        latitude: <number>offer.onLatitude,
        longitude: <number>offer.onLangitude,
      };
      let offerKey: string = offer.onOfferName;
      return { cord, offerKey };
    }
  );

  const markerLocations: MapMarkerItem[] = [
    ...topTenMarkerLocations,
    ...otherMarkerLocations,
  ];

  const { latitudeDelta, longitudeDelta } = calculateMapViewDelta(
    topTenMarkerLocations
  );
  return {
    userLocation,
    markerLocations,
    mapViewDelta: { latitudeDelta, longitudeDelta },
  };
};


export const calculateMapViewDelta = function(
  markerItems: MapMarkerItem[],
  currentLocation?: Location
): Region {
  let minX: number, maxX: number, minY: number, maxY: number;

  if (currentLocation) {
    markerItems.push({
      cord: currentLocation,
      offerKey: new Date().getTime().toString(),
    });
  }
  let markerPositions = markerItems.filter(
    ({ cord }) => cord.latitude && cord.longitude
  );
  // init first point
  ((cord: Location) => {
    minX = cord.latitude;
    maxX = cord.latitude;
    minY = cord.longitude;
    maxY = cord.longitude;
  })(markerPositions[0].cord);

  // calculate rect
  markerPositions.map(({ cord }) => {
    minX = Math.min(minX, cord.latitude);
    maxX = Math.max(maxX, cord.latitude);
    minY = Math.min(minY, cord.longitude);
    maxY = Math.max(maxY, cord.longitude);
  });

  var midX = (minX + maxX) / 2;
  var midY = (minY + maxY) / 2;
  var midPoint = [midX, midY];

  var deltaX = maxX - minX;
  var deltaY = maxY - minY;

  return {
    latitude: currentLocation ? currentLocation.latitude : midX,
    longitude: currentLocation ? currentLocation.longitude : midY,
    latitudeDelta: deltaX + 0.1,
    longitudeDelta: deltaY + 0.1,
  };
};
