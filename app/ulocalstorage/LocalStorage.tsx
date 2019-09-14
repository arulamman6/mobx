import {AsyncStorage} from 'react-native'
import { Deals } from '../models/Deal'

export const storeData = async (value:any) => {
    try {
      await AsyncStorage.setItem('dealsKey', JSON.stringify(value));
    } catch (error) {
      // Error saving data
    }
  };
  
    
  export const getNearByDeals = () => {
      try {
        AsyncStorage.getItem("dealsKey").then((value) => {
            return value;
         })
      } catch (error) {
          
      }
  }

