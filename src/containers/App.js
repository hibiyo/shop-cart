import { connect } from 'react-redux'

import { addtocart,checkout } from '../redux/actions'
import Main from '../components/Main'

export default connect(
    state => ({products:state.products,cart:state.cart}),
    {addtocart,checkout}
)(Main);