import React from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'

export interface Props {
    deal: any,
    onPress: any 
  }

class DealItem extends React.Component<Props> {

  handlePress = () => {
    this.props.onPress(this.props.deal.key)
  }

  render() {
    const { deal } = this.props
    return (
      <TouchableOpacity style={styles.deal} onPress={this.handlePress}>
        <View style={styles.info}>
          <Text style={styles.title}>{deal.onId}</Text>
          <View style={styles.footer}>
            <Text style={styles.cause}>{deal.onDealTitle}</Text>
            <Text style={styles.price}>{deal.onSupplierName}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  deal: {
    marginHorizontal: 16,
    marginTop: 16,
  },
  image: {
    width: '100%',
    height: 150,
    backgroundColor: '#ccc',
  },
  info: {
    padding: 10,
    backgroundColor: '#fff',
    borderColor: '#bbb',
    borderWidth: 1,
    borderTopWidth: 0,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  footer: {
    flexDirection: 'row',
  },
  cause: {
    flex: 2,
  },
  price: {
    flex: 1,
    textAlign: 'right',
  },
})

export default DealItem