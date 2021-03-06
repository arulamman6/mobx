import CommonService from './../CommonService'
import Deals from '../../models/Deals'

import { apiHost, nearByDeals } from '../../util/ServerConfig'

class NearByDealService extends CommonService<Deals> {
    constructor() {
        super()
        this.rootURL = apiHost 
    }
 
    async getNearByDealsData(search: String): Promise<Deals[]> {
        try {
            const response = await fetch(this.rootURL + nearByDeals)
            if (!response.ok) {
                throw new Error("cannot get data")
            }
            let responseJson = await response.json();
            const {
                contentListMap: { OFFERS },
            } = responseJson;
            console.log('response'+ OFFERS)
            return OFFERS.AllOffers;
        }
        catch (error) {
            throw error
        }
    }
}

export const nearByDealService = new NearByDealService() 