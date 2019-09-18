import { observable, action, runInAction, computed, IObservableValue } from 'mobx'
import { nearByDealService } from '../../api/nearbydeals/NearByDealsService'
import { storeData, getNearByDeals } from '../../ulocalstorage/LocalStorage'
import {  MapViewState, OfferItem, getTopTenMarkerWithZoomLevel, DEFAULT_CORDS } from '../../util/LocationUtil'
import Location from '../../models/Locations/Location'

export default class NearByDealMapMarkerStore {
 
   @observable isLoading: boolean = true
    @observable isFailure: boolean = false
    @observable offer: OfferItem[]  = []
    @observable userLocation: Location = DEFAULT_CORDS;
    //@observable offer: IObservableValue<OfferItem[]> = observable.box()
    
    constructor() {
        //this.offer.observe(() => {
            this.generateMapMarkers()
       // }, true)
    }

 
    generateMapMarkers() {
           const mapViewState: MapViewState = getTopTenMarkerWithZoomLevel(
            this.offer,
            this.userLocation
          );
          runInAction(() => {
            this.isLoading = false
          //this.prevLocation = this.props.userLocation;
          //this.setState({ ...mapViewState });
        })
      }
    
    @action setOfferList(offers: OfferItem[]) {
        this.offer = offers
    }

    @action setCurrentLocation(location: Location) {
      this.userLocation = location
   }
}