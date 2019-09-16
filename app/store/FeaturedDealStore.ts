import { observable, runInAction, IObservableValue } from 'mobx'
import { Deals } from '../models/Deal'
import { dealService } from '../api/deal/DealService'

export default class FeaturedDealStore {
    @observable isLoading: boolean = true
    @observable isFailure: boolean = false
    @observable featuredDealTerm: IObservableValue<string> = observable.box("")
    @observable deals: Deals = []

    constructor() {
        this.featuredDealTerm.observe(() => {
            this.fetchDeals()
        }, true)
    }

    async fetchDeals() {
        dealService.getFeaturedDealsData(this.featuredDealTerm.get()).then(data => {
            runInAction(() => {
                this.isLoading = false
                this.deals = data
            })
        })
    }
    
   
}