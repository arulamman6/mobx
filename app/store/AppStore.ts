import { observable, action, runInAction, computed, IObservableValue } from 'mobx'
import { FeaturedDeals } from '../models/FeaturedDeal'
import { dealService } from '../api/featuredDeal/FeaturedDealService'

export default class AppStore {
    @observable isLoading: boolean = true
    @observable isFailure: boolean = false
    @observable searchTerm: IObservableValue<string> = observable.box("")
    @observable FeaturedDeals: FeaturedDeals = []
    @observable nearByDeals: FeaturedDeals = []
    @observable currentDealId: string | null = null

    constructor() {
        this.searchTerm.observe(() => {
            this.fetchDeals()
        }, true)
    }

    async fetchDeals() {
        dealService.getFeaturedDealsData(this.searchTerm.get()).then(data => {
            runInAction(() => {
                this.isLoading = false
                this.FeaturedDeals = data
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
        return this.FeaturedDeals.find((deal) => deal.onId === this.currentDealId)
    }
}