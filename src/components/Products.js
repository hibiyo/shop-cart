import React, { Component } from 'react'
import PropTypes from 'prop-types'

import '../style/button.css'
import '../style/Products.css'

class Products extends Component {
    static propTypes = {
        products:PropTypes.array.isRequired,
        addtocart:PropTypes.func.isRequired,
    }
    addToCart = (product) =>{
        if(product.inventory>0){
            this.props.addtocart(product)
        }
    }

    render() {
        const products = this.props.products
        const list = products.map((product,index) => {
            return (
                <ul key={index}>
                    <li>
                        {product.title} - $ {product.price} × {product.inventory}
                    </li>
                    <button className={product.inventory!==0?'':'style'} onClick={this.addToCart.bind(this,products[index])}>Add to cart</button>
                </ul>
            )
        })
        return (
            <div className={'products'}>
                <h3>Products</h3>
                {list}
            </div>
        );
    }
}

export default Products;