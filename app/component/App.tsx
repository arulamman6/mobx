import React from 'react'
import {
  View,
  StyleSheet,
  Text,
} from 'react-native'
import { observer, inject } from "mobx-react"
import DealList from './deals/DealList'
import NearByDealsList from './nearbydeals/NearByDealsList'
import FeaturedDealStore from '../store/Home/FeaturedDealStore'
import NearByDealStore from '../store/Home/NearByDealStore'

export interface Props {
  featuredDealStore: FeaturedDealStore,
  nearByDealStore: NearByDealStore
}


@inject("featuredDealStore") @observer
@inject("nearByDealStore") @observer
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
    const featuredDealStore = this.props.featuredDealStore
    const nearByDealStore = this.props.nearByDealStore
    return (
      <View style={styles.main}>
        <View style={styles.container}>
          <DealList deals={featuredDealStore.deals} onItemPress={this.setCurrentDeal} />
        </View>
        <View style={styles.container}>
          <Text style={styles.textinfo}>NEAR BY DEALS</Text>
            <NearByDealsList deals={nearByDealStore.nearByDeal} onItemPress={this.setCurrentDeal} />
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