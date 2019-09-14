import {AsyncStorage} from 'react-native'

export const saveData = (value: string) => {
    try {
        AsyncStorage.setItem("dealsKey", value)
    } catch (error) {
        
    }
  }

  export const getNearByDeals = () => {
      try {
        AsyncStorage.getItem("dealsKey").then((value) => {
            return value;
         })
      } catch (error) {
          
      }
  }

