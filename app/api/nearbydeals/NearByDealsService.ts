import CommonService from './../CommonService'
import NearByDeals from '../../models/NearByDeal'

import { apiHost, nearByDeals } from '../../util/util'

class NearByDealService extends CommonService<NearByDeals> {
    constructor() {
        super()
        this.rootURL = apiHost 
    }
 
    async getNearByDealsData(search: String): Promise<NearByDeals[]> {
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