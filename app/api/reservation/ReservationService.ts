import CommonService from './../CommonService'
import NearByDeals from '../../models/Deals'

import { apiHost, reservation } from '../../util/ServerConfig'

class ReservationService extends CommonService<NearByDeals> {
    constructor() {
        super()
        this.rootURL = apiHost 
    }
 
    async getReservationData(): Promise<NearByDeals[]> {
        try {
            const response = await fetch(this.rootURL + reservation)
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

export const reservationService = new ReservationService() 