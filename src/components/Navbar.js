import React, {useContext}  from 'react'
import { Container, Anchor } from 'atomize'
import { Link, withRouter } from 'react-router-dom'
import { ShopContext } from '../context/shop.Context'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

const Navbar = () => {

     const { openCart } = useContext(ShopContext)

    return (
        <div className="navbar"style={{
            display: "flex",
            flexDirection:"row",
            padding: "2rem",
            justifyContent: "space-between"  
        }}  >
            <Link to="/" style={{textDecorationLine: "none", color: "#00e4c9" }} ><h2>Lynch</h2></Link>
            <Link to="#email" style={{textDecorationLine: "none", color: "white" }} ><h3>About </h3></Link>
            <Link to="#footer" style={{textDecorationLine: "none", color: "white" }} ><h3>Contact </h3></Link>


                <Anchor onClick={() => openCart()}><ShoppingCartOutlinedIcon fontSize="large" style={{color: "white"}} /> </Anchor>
        </div >
    )
}

export default Navbar
