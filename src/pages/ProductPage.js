import React, {useEffect, useContext} from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/shop.Context'

function ProductPage() {

    let { id } = useParams();
    const { fetchProductWithId,  product} = useContext(ShopContext)

    useEffect(() => {
        fetchProductWithId(id)
        return () => {

        };
    }, [fetchProductWithId, id])
    
    if(!product.title) return <div>Loading</div>
    return (
        <>
            <div id='product-component-1592383090518'></div>

        </>
    )
}

export default ProductPage
