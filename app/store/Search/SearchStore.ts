import { observable, action, runInAction, computed, IObservableValue } from 'mobx'
import { getNearByDeals } from '../../ulocalstorage/LocalStorage'
import  Deals from '../../models/Deals'

export default class SearchStore {
    @observable isLoading: boolean = true
    @observable isFailure: boolean = false
    @observable searchTerm: IObservableValue<string> = observable.box("")
    @observable deal: Deals[] = []
    @observable filteredDeal: Deals[] = []
    @observable currentDealId: string | null = null

    constructor() {
        this.searchTerm.observe(() => {
            this.getMatchingDeals()
        }, true)
    }

    async getMatchingDeals() {
     
      let filteredDeal= this.deal;
      let searchText: string = String(this.searchTerm.get.toString)

      if (searchText) {
        filteredDeal = this.deal.filter((offer: Deals) => {
          const offerScheme = `${offer.onDealTitle.toUpperCase()} ${offer.onAreaName.toUpperCase()} ${offer.onCityName.toUpperCase()} ${offer.onCategoryName.toUpperCase()}`;
          const searchKey = searchText.toUpperCase()
  
          return offerScheme.includes(searchKey);
        });
        //Sort the filtered results
        filteredDeal.sort((a: Deals, b: Deals) =>
          b.onAreaName > a.onAreaName ? -1 : 1
        );
        //this.setState({ offers: filteredOffer, isSearching: true });
       // AnalyticsService.postFirebaseEvent(EVENT_NAMES.SEARCHED_WITH_RESULTS);
      } else {
        filteredDeal = [];
        //this.setState({ offers: filteredOffer, isSearching: false });
        //AnalyticsService.postFirebaseEvent(EVENT_NAMES.SEARCHED_WITH_NO_RESULTS);
      }
      runInAction(() => {
        this.isLoading = false
        this.filteredDeal = filteredDeal
      })
    }  
    
    getMatchingOffers = (text: string) => {

    }
    
    
   @action setSearchTerm(searchStr: string) {
       this.searchTerm.set(searchStr)
   }

    @action setDeals(deal: Deals[]) {
        this.deal = deal
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
        return this.deal.find((deal) => deal.onDealTitle === this.currentDealId)
    }
}