import React from 'react'
import { View, FlatList, StyleSheet } from 'react-native'
import MapMarkerItem from './MapMarkerItem'


export interface Props {
    deals: any,
    onItemPress: any 
  }

class MapMarkerList extends React.Component<Props> {

  render() {
    return (
      <View style={styles.list}>
        <FlatList
          data={this.props.deals}
          renderItem={({ item }) => (
            <MapMarkerItem deal={item} onPress={this.props.onItemPress} />
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

export default MapMarkerList