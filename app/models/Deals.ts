
import CommonModel from "./CommonModel"

export declare type Deal = Deals[]

export declare type UDeal = Deals | undefined

export default interface Deals extends CommonModel {
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