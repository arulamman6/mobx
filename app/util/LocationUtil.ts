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
