import {AsyncStorage} from 'react-native'
import { any } from 'prop-types';
import { Deal } from '../models/Deals'

export const storeData = async (value:any) => {
    try {
      await AsyncStorage.setItem('dealsKey', JSON.stringify(value));
    } catch (error) {
      // Error saving data
    }
  };
  
    
  export const getNearByDeals = async():Promise<Deal> => {
    try {
        const retrievedItem =  await AsyncStorage.getItem('dealsKey');
        if (retrievedItem !== null) {
            const item = JSON.parse(retrievedItem);
            let myArr:Deal = [item];
            return myArr;
        }
      } catch (error) {
        console.log(error.message);
      }
      return []
  }

  export const saveSearchData = async (value:string) => {
    try {
      let searchedData = value + '@,@' + getSearchedData
      await AsyncStorage.setItem('searchKey', searchedData);
    } catch (error) {
      // Error saving data
    }
  };

  export const getSearchedData = async():Promise<string> => {
    try {
        const retrievedItem =  await AsyncStorage.getItem('searchKey');
        if (retrievedItem !== null) {
            let searchedData:string = retrievedItem;
            return searchedData;
        }
      } catch (error) {
        console.log(error.message);
      }
      return ""
  }