import CommonService from '../CommonService'
import Deal from '../../models/FeaturedDeal'

import { apiHost, featuredDeals } from '../../util/ServerConfig'

class FeaturedDealService extends CommonService<Deal> {
    constructor() {
        super()
        this.rootURL = apiHost 
    }

    async getFeaturedDealsData(search: String): Promise<Deal[]> {
        try {
            const response = await fetch(this.rootURL + featuredDeals )
            if (!response.ok) {
                throw new Error("cannot get data")
            }
            let responseJson = await response.json();
            const {
                contentListMap: { OFFERS },
            } = responseJson;
            console.log('response'+ OFFERS)
            return OFFERS.FeaturedOffers;
        }
        catch (error) {
            throw error
        }
    }
    
}

export const dealService = new FeaturedDealService() 