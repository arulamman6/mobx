import { observable, runInAction, IObservableValue } from 'mobx'
import { FeaturedDeals } from '../../models/FeaturedDeal'
import { recommendedSearchService } from '../../api/search/RecommendedDealsService'
import Deals from '../../models/Deals'

export default class ReservationStores {
    @observable isLoading: boolean = true
    @observable isFailure: boolean = false
    @observable featuredDealTerm: IObservableValue<string> = observable.box("")
    @observable deals: Deals[] = []

    constructor() {
        this.reservationAPI()
    }

    async reservationAPI() {
            runInAction(() => {
                this.isLoading = false
            })
    }
    
}