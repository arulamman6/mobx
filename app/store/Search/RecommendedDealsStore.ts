import { observable, runInAction, IObservableValue } from 'mobx'
import { FeaturedDeals } from '../../models/FeaturedDeal'
import { recommendedSearchService } from '../../api/search/RecommendedDealsService'
import Deals from '../../models/Deals'

export default class RecommendedDealsStore {
    @observable isLoading: boolean = true
    @observable isFailure: boolean = false
    @observable featuredDealTerm: IObservableValue<string> = observable.box("")
    @observable deals: Deals[] = []

    constructor() {
        this.fetchRecommendedDeals()
    }

    async fetchRecommendedDeals() {
        recommendedSearchService.getRecommendedDealsData().then(data => {
            runInAction(() => {
                this.isLoading = false
                this.deals = data
            })
        })
    }
    
   
}