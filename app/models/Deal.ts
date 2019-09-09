
import CommonModel from "./CommonModel"

export declare type Deals = Deal[]

export declare type UDeal = Deal | undefined

export default interface Deal extends CommonModel {
    id: string
    employee_name: string
    employee_salary: string
    employee_age: string
    profile_image: string
}