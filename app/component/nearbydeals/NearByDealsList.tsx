import React from 'react'
import { View, FlatList, StyleSheet } from 'react-native'
import NearByDealsItem from './NearByDealsItem'


export interface Props {
    deals: any,
    onItemPress: any 
  }

class NearByDealsList extends React.Component<Props> {

  render() {
    return (
      <View style={styles.list}>
        <FlatList
          data={this.props.deals}
          renderItem={({ item }) => (
            <NearByDealsItem deal={item} onPress={this.props.onItemPress} />
          )}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  list: {
    backgroundColor: '#eee'
  },
})

export default NearByDealsList