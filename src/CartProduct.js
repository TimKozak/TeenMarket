import React from 'react'
import './CartProduct.css'

function CartProduct({ id, image, title, price, rating }) {
    return (
        <div className='checkoutProduct'>
            <img className='checkoutProduct__image' src={image} />

            <div className='checkoutProduct__info'>
                <p className='checkoutProduct__title'>
                    {title}
                </p>
                <p className='checkoutProduct__price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <button>Remove from Basket</button>

            </div>
        </div>
    )
}

export default CartProduct
