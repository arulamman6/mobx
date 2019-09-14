import { observable, action, runInAction, computed, IObservableValue } from 'mobx'
import { Deals } from '../models/Deal'
import { dealService } from '../api/deal/DealService'
import { storeData, getNearByDeals } from '../ulocalstorage/LocalStorage'

export default class AppStore {
    @observable isLoading: boolean = true
    @observable isFailure: boolean = false
    @observable searchTerm: IObservableValue<string> = observable.box("")
    @observable deals: Deals = []
    @observable nearByDeals: Deals = []
    @observable currentDealId: string | null = null

    constructor() {
        this.searchTerm.observe(() => {
            this.fetchDeals()
            this.fetchNearByDeals()
        }, true)
    }

    async fetchDeals() {
        dealService.getFeaturedDealsData(this.searchTerm.get()).then(data => {
            runInAction(() => {
                this.isLoading = false
                this.deals = data
            })
        })
    }
    
    async fetchNearByDeals() {
        getNearByDeals().then(data => {
            console.log("Data Length Size == " + data.length)
            if (data.length > 0) {
                this.isLoading = false
                this.nearByDeals = data
                return
            }
        })
       
        dealService.getNearByDealsData(this.searchTerm.get()).then(data => {
            runInAction(() => {
                storeData(data)
                this.isLoading = false
                this.nearByDeals = data
            })
        })
    }

    @action setSearchTerm(searchStr: string) {
        this.searchTerm.set(searchStr)
    }

    @action
    setCurrentDeal(dealId: string) {
        this.currentDealId = dealId
    }
    
    @action
    unsetCurrentDeal() {
        this.currentDealId = null
    }

    @computed get currentDeal() {
        return this.deals.find((deal) => deal.onId === this.currentDealId)
    }
}