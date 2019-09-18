import { observable, action, runInAction, computed, IObservableValue } from 'mobx'
import {saveSearchData, getSearchedData} from '../../ulocalstorage/LocalStorage'
export default class RecentSearchStore {
    @observable isLoading: boolean = true
    @observable isFailure: boolean = false
    @observable searchTerm: IObservableValue<string> = observable.box("")
    @observable currentDealId: string | null = null
    @observable getSearchData: string | null = null

    constructor() {
        this.searchTerm.observe(() => {
            this.getRecentSearchData()
        }, true)
    }

    async getRecentSearchData() {
        let searchData = getSearchedData().then(value => {
            runInAction(() => {
                this.isLoading = false
                this.getSearchData = value
            })
        })
    }
    
    
    @action saveSearchTerm(searchStr: string) {
        saveSearchData(searchStr)
    }

}