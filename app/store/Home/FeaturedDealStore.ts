import { observable, runInAction, IObservableValue } from 'mobx'
import { FeaturedDeals } from '../../models/FeaturedDeal'
import { dealService } from '../../api/featuredDeal/FeaturedDealService'

export default class FeaturedDealStore {
    @observable isLoading: boolean = true
    @observable isFailure: boolean = false
    @observable featuredDealTerm: IObservableValue<string> = observable.box("")
    @observable deals: FeaturedDeals = []

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