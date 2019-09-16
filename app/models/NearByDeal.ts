
import CommonModel from "./CommonModel"

export declare type NearByDeals = NearByDeal[]

export declare type UNearByDeal = NearByDeal | undefined

export default interface NearByDeal extends CommonModel {
    onDealTitle: string
    onAreaName: string
    onOfferName: string
    onCityName: string
    onLatitude: string | number
    onLangitude: string | number
    onExpiry: string
    onCategoryName: string
    onDescription: string
    onTelephone: string
    distance: number;
    isOnlineStore?: boolean;
}