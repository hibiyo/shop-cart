import React, { Component } from 'react'
import PropTypes from 'prop-types'

import '../style/button.css'
import '../style/Cart.css'

class Cart extends Component {
    static propTypes = {
        cart:PropTypes.array.isRequired,
        checkout:PropTypes.func.isRequired,
    }
    checkout = () => {
        this.props.checkout()
    }
    render() {
        const { cart } = this.props
        // console.log(cart)
        const list = cart.map((cart,index) => (
            <ul key={index}>
                <li>
                    {cart.title} - $ {cart.price} × {cart.inventory} = $ {(cart.price*cart.inventory).toFixed(2)}
                </li>
            </ul>
        ))
        let Total = 0
        for(let index=0;cart.length>index;index++){
            Total += (cart[index].price*cart[index].inventory)*1
        }
        if(cart.length===0){
            return (
                <div className={'bottom'}>
                    <h3>Your Cart</h3>
                    <p>Please add products to cart.</p>
                    <p> Total : $ 0.00</p>
                    <button className={'style'}>Checkout</button>
                </div>
            )
        }else{
            return (
                <div className={'bottom'}>
                    <h3>Your Cart</h3>
                    {list}
                    <p> Total : $ {Total.toFixed(2)}</p>
                    <button onClick={this.checkout}>Checkout</button>
                </div>
            )
        }
    }
}

export default Cart;