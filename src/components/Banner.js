import React from 'react'
import ShopProvider from '../context/shop.Context'

import '../css/homepage.css'
import '../css/layout.css'

import Navbar from '../components/Navbar'

const Banner = () => {
    return (

        <div className="hero" 
            style={{
                height: "100vh", 
                width: "100vw",
                padding: "0",
                margin: "0",
                textAlign: "center",
                backgroundSize: "cover", 
                backgroundPosition: "center",
                }} >
                    <Navbar />
                    <h1 style={{color: "white",  textAlign: "center", position: "relative", top: "20%", fontWeight: "900"}} >
                        Pain relief. Whenever. Wherever.
                    </h1>
                    <button onClick={() =>  new ShopProvider()} >Try Lynch Today</button>
            </div>

    )
}

export default Banner
