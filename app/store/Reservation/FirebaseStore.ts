import { observable, action, runInAction, computed, IObservableValue } from 'mobx'

export default class AppStore {
    @observable isLoading: boolean = true
    @observable isFailure: boolean = false

    constructor() {
        this.setupFirebase()
    }

    async setupFirebase() {
       
    }
    
    @action 
    setScreenName(screenName: string) {
    }

    @action
    setAction(action: any) {

    }
    
}