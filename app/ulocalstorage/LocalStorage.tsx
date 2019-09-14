import Deal from "../models/Deal";
import {AsyncStorage} from 'react-native'

export const saveData = (value: string) => {
    try {
        AsyncStorage.setItem("myKey", value)
    } catch (error) {
        
    }
  }

  export const getNearByDeals = () => {
      try {
        AsyncStorage.getItem("myKey").then((value) => {
            return value;
         })
      } catch (error) {
          
      }
  }

