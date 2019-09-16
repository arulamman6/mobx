import { observable, action, runInAction, computed, IObservableValue } from 'mobx'
import { nearByDealService } from '../api/nearbydeals/NearByDealsService'
import { storeData, getNearByDeals } from '../ulocalstorage/LocalStorage'
import { NearByDeals } from '../models/NearByDeal'

export default class SearchStore {
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
                this.nearByDeal = data
                return
            }
        })
    }   

}