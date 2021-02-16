import React from 'react'
import "./Cart.css"
import CartProduct from './CartProduct';
import { useStateValue } from './StateProvider'

function Cart() {
    const [{ cart }, dispatch] = useStateValue();

    return (
        <div className='checkout'>
            <div className="checkout__left">
                <div>
                    <h2 className="checkout__title">Your shopping Cart</h2>

                    {cart.map(item => (
                        <CartProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                        />
                    ))}

                </div>

            </div>
        </div>
    )
}

export default Cart
