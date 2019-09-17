

export declare type GeoCoordinate = GeoCoordinates[]

export declare type UGeoCoordinate = GeoCoordinates | undefined

export default interface GeoCoordinates  {
    latitude?: number
    longitude?: number
    accuracy?: number
    altitude?: number
    heading?: number
    speed?: number
    altitudeAccuracy?: number
}