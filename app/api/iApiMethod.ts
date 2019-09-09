import CommonModel from '../models/CommonModel'
export default interface iApiMethod<T extends CommonModel> {
    getAll(): Promise<T[]>
}