import CommonModel from '../models/CommonModel'
import iApiMethod from './iApiMethod'

export default abstract class CommonService<T extends CommonModel> implements iApiMethod<T>  {

    rootURL: string = ""

    
    async getAll(): Promise<T[]> {
        try {
            const response = await fetch(this.rootURL)
            if (!response.ok) {
                throw new Error("Cannot get data")
            }
            return response.json()
        }
        catch (error) {
            throw error
        }
    }

}