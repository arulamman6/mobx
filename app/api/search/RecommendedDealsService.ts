import CommonService from '../CommonService'
import Deals from '../../models/Deals'

import { apiHost, recommendedDeals } from '../../util/ServerConfig'

class RecommendedDealsService extends CommonService<Deals> {
    constructor() {
        super()
        this.rootURL = apiHost 
    }
 
    async getRecommendedDealsData(): Promise<Deals[]> {
        try {
            const response = await fetch(this.rootURL + recommendedDeals)
            if (!response.ok) {
                throw new Error("cannot get data")
            }
            let responseJson = await response.json();
            const {
                contentListMap: { OFFERS },
            } = responseJson;
            console.log('response'+ OFFERS)
            return OFFERS.RecommendedOffers;
        }
        catch (error) {
            throw error
        }
    }
}


export const recommendedSearchService = new RecommendedDealsService() 