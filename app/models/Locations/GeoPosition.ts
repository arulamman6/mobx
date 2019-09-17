import GeoCoordinates from './GeoCoordinates'

export declare type GeoPositions = GeoPosition[]

export declare type UGeoPosition = GeoPosition | undefined

export default interface GeoPosition  {
    coords: GeoCoordinates
    timestamp: Date
}