import React from 'react'
import {
  View,
  StyleSheet,
  Text,
} from 'react-native'
import { observer, inject } from "mobx-react"
import DealList from './deals/DealList'
import NearByDealsList from './nearbydeals/NearByDealsList'
import AppStore from '../store/AppStore'
import NearByDealsItem from './nearbydeals/NearByDealsItem'


export interface Props {
  appStore: AppStore
}

@inject("appStore") @observer
class App extends React.Component<Props> {
  /*
  searchDeals = (searchTerm: string) => {
    this.props.appStore.setSearchTerm(searchTerm)
  }
  */

  setCurrentDeal = (dealId: string) => {
    //this.props.appStore.setCurrentDeal(dealId)
  }

  /*
  unsetCurrentDeal = () => {
    this.props.appStore.unsetCurrentDeal()
  }
  */

  render() {
    const appStore = this.props.appStore
    return (
      <View style={styles.main}>
        <View style={styles.container}>
          <DealList deals={appStore.deals} onItemPress={this.setCurrentDeal} />
        </View>
        <View style={styles.container}>
          <Text style={styles.textinfo}>NEAR BY DEALS</Text>
            <NearByDealsList deals={appStore.nearByDeals} onItemPress={this.setCurrentDeal} />
        </View>
       </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    justifyContent: 'flex-start'//,
   // alignItems: 'row',
  },
  main: {
    flex: 1,
    marginTop: 30,
  },
  header: {
    fontSize: 40,
  },
  textinfo: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
    backgroundColor: '#bbb',
    borderColor: '#bbb',
    borderWidth: 1,
    borderTopWidth: 0,
    justifyContent: 'center',//,
    alignItems: 'center',
  },
})

export default App