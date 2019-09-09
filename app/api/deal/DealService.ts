import CommonService from './../CommonService'
import Deal from '../../models/Deal'
import { apiHost } from '../../util/util'

class DealService extends CommonService<Deal> {
    constructor() {
        super()
        this.rootURL = apiHost + "api/v1/employees"
    }

    async getDealsData(search: String): Promise<Deal[]> {
        try {
            const response = await fetch(this.rootURL)
            if (!response.ok) {
                throw new Error("cannot get data")
            }
            return response.json()
        }
        catch (error) {
            throw error
        }
    }
    
}

export const dealService = new DealService() 