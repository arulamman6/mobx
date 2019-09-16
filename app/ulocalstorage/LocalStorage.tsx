import {AsyncStorage} from 'react-native'
import { any } from 'prop-types';
import { NearByDeals } from '../models/NearByDeal'

export const storeData = async (value:any) => {
    try {
      await AsyncStorage.setItem('dealsKey', JSON.stringify(value));
    } catch (error) {
      // Error saving data
    }
  };
  
    
  export const getNearByDeals = async():Promise<NearByDeals> => {
    try {
        const retrievedItem =  await AsyncStorage.getItem('dealsKey');
        if (retrievedItem !== null) {
            const item = JSON.parse(retrievedItem);
            let myArr:NearByDeals = [item];
            return myArr;
        }
      } catch (error) {
        console.log(error.message);
      }
      return []
  }

