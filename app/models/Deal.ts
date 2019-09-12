
import CommonModel from "./CommonModel"

export declare type Deals = Deal[]

export declare type UDeal = Deal | undefined

export default interface Deal extends CommonModel {
    onThumbNail: string
    onCityName: string
    SeatingCapacity: string
    TimeSlot: string
    onCategoryName: string
    onOfferDetailedDescription: string
    ContacteMailId: string
    onLangitude: string
    ReservationEmailId: string
    onDescription: string
    onBannerImage: string
    onDetailedAddress: string
    onWebsite: string
    TermsAndConditions: string
    onOfferName: string
    onId: string
    onLatitude: string
    AllowReservation: string
    onSupplierName: string
    onExpiry: string
    onAreaName: string
    onInfoIcon: string
    onDealTitle: string
    DaysToDisplay: string
    onTelephone: string
}