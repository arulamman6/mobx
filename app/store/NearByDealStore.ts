import { observable, action, runInAction, computed, IObservableValue } from 'mobx'
import { nearByDealService } from '../api/nearbydeals/NearByDealsService'
import { storeData, getNearByDeals } from '../ulocalstorage/LocalStorage'
import { NearByDeals } from '../models/NearByDeal'
import { getOffersWithoutOnlineStore, Location, GeoPosition, getLatLongFromPosition, calculateDistanceFromCurrentLocation} from '../util/StoreUtils'
import { DEFAULT_CORDS } from '../util/util'

export default class NearByDealStore {
    @observable isLoading: boolean = true
    @observable isFailure: boolean = false
    @observable searchTerm: IObservableValue<string> = observable.box("")
    @observable nearByDeal: NearByDeals = []

    constructor() {
        this.searchTerm.observe(() => {
            this.fetchNearByDeals()
        }, true)
    }

    async fetchNearByDeals() {
       
        getNearByDeals().then(data => {
            console.log("Data Length Size == " + data.length)
            if (data.length > 0) {
                this.isLoading = false
                this.nearByDeal = this.getNearByDealsOrderByNameWithLocation(data)
                return
            }
        })
        nearByDealService.getNearByDealsData(this.searchTerm.get()).then(data => {
            runInAction(() => {
                storeData(data)
                this.isLoading = false
                this.nearByDeal = this.getNearByDealsOrderByNameWithLocation(data)
            })
        })
    }

    
    getNearByDealsOrderByNameWithLocation(nearByDealList: NearByDeals): NearByDeals{
          
        
        let postion: GeoPosition = {
            coords: DEFAULT_CORDS,
            timestamp: new Date()
        }

        const currentLocation: Location = getLatLongFromPosition(postion);

        //TODO: add validation
      
        //change the key name
        const offersWithoutOnlineStore = getOffersWithoutOnlineStore(nearByDealList);
      
        const offerlistWithDistance = calculateDistanceFromCurrentLocation(
          offersWithoutOnlineStore,
          currentLocation
        );
      
        //Remove invalid Items
        const sortedOffersWithoutOnlineStore = offerlistWithDistance.sort(
          (a, b) => a.distance - b.distance
        );
        return { sortedOffersWithoutOnlineStore, completeOfferList: nearByDealList };
    } 
    
    
  
}