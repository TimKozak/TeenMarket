import React from 'react'
import "./Home.css"
import Product from './Product'

function Home() {
    return (
        <div className='home'>
            <div className="home__container">

                <div className="home__row">
                    <Product
                        id="000000001"
                        title="The lean startup" 
                        price={29.99} 
                        image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg'
                    />
                    <Product 
                        id="000000002"
                        title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whick, 5 Litre Glass Bowl"
                        price={239.0} 
                        image='https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg'
                    />
                </div>

                <div className="home__row">
                    <Product 
                        id="000000003"
                        title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor" 
                        price={199.99} 
                        image='https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg'
                    />
                    <Product 
                        id="000000004"
                        title="The lean startup" 
                        price={98.99} 
                        image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg'
                    />
                </div>
            </div>
        </div>
    )
}

export default Home

