import AppStore from './AppStore'
import FeaturedDealStore from '../store/FeaturedDealStore'
import NearByDealStore from '../store/NearByDealStore'

export default {
  appStore: new AppStore(),
  featuredDealStore: new FeaturedDealStore(),
  nearByDealStore: new NearByDealStore(),
}