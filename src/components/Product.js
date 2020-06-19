import React, { useContext, useEffect} from 'react'
import ShopProvider, { ShopContext } from '../context/shop.Context'
import { Row, Col } from 'atomize'
import { Link } from 'react-router-dom'

import '../css/homepage.css'
import '../css/layout.css'

const Product = () => {
    const { fetchAllProducts, products } = useContext(ShopContext)

    useEffect(() => {
        fetchAllProducts()
        return () => {

        };
    }, [fetchAllProducts])


    if(!products) return <div>Loading</div>
    return (
        <Row>
            {products.map(product => (
                <Col key={product.id}>
                    <Link to={`/product/${product.id}`}>

                        <div className="container" style={{
                            width: "100%",
                            height: "100vh",
                            padding: "0",
                            textAlign: "center",

                        }} >
                            <img src={product.images[0].src} alt="How it works!" style={{float: "right", bgRepeat: "none", bgSize: "cover", bgPos: "center center", width: "50%", height: "60%", padding: "0", margin: "0"}} />

                            <div className="product" style={{float: "left", color: "black", width: "50%", height: "100%", padding: "2rem", boxSizing: "border-box",  textAlign: "center", top:"50%", left: "50%", marginTop: "2rem" }} >
                                <h1>{product.title}</h1>
                                <p style={{fontWeight: "700"}}> {product.variants[0].price} </p>
                                <p style={{fontWeight: "700"}}> {product.tags} </p>
                                <button style={{width: "50%", height: "5%"}} >Buy Now</button>
                                <p style={{marginTop: "1.5rem"}}> {product.description} </p>
                            </div>
                        </div>
                    </Link>
                </Col>
            ))}
        </Row>
    )
}

export default Product
