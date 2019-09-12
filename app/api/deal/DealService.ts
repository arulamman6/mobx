import CommonService from './../CommonService'
import Deal from '../../models/Deal'
import { apiHost } from '../../util/util'

class DealService extends CommonService<Deal> {
    constructor() {
        super()
        this.rootURL = apiHost + "api/getDeals?bankId=RAK&channelId=MB&mode=HTML&userSegment=featured&pageContext=Offers"
    }

    async getFeaturedDealsData(search: String): Promise<Deal[]> {
        try {
            const response = await fetch(this.rootURL)
            if (!response.ok) {
                throw new Error("cannot get data")
            }
            let responseJson = await response.json();
            const {
                contentListMap: { OFFERS },
            } = responseJson;
            console.log('response'+ OFFERS)
            return OFFERS.FeaturedOffers;
            //return response.json()
        }
        catch (error) {
            throw error
        }
    }
    
}

export const dealService = new DealService() 