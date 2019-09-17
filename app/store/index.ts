import AppStore from './AppStore'
import FeaturedDealStore from './Home/FeaturedDealStore'
import NearByDealStore from './Home/NearByDealStore'

export default {
  appStore: new AppStore(),
  featuredDealStore: new FeaturedDealStore(),
  nearByDealStore: new NearByDealStore(),
}