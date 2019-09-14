import {AsyncStorage} from 'react-native'

export const storeData = async (value:any) => {
    try {
      await AsyncStorage.setItem('dealsKey', JSON.stringify(value));
    } catch (error) {
      // Error saving data
    }
  };
  
    
  export const getNearByDeals = async() => {
    try {
        const retrievedItem =  await AsyncStorage.getItem('dealsKey');
        if (retrievedItem !== null) {
            const item = JSON.parse(retrievedItem);
            return item;
        }
      } catch (error) {
        console.log(error.message);
      }
      return
  }

