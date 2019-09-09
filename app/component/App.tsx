import React from 'react'
import {
  View,
  StyleSheet,
} from 'react-native'
import { observer, inject } from "mobx-react"
import DealList from './DealList'
import AppStore from '../store/AppStore'


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
        <DealList deals={appStore.deals} onItemPress={this.setCurrentDeal} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  main: {
    marginTop: 30,
  },
  header: {
    fontSize: 40,
  },
})

export default App