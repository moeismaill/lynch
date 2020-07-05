import React, {useContext}  from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {


    return (
        <div className="navbar"style={{
            display: "flex",
            flexDirection:"row",
            padding: "2rem",
            fontSize: "2rem"
        }}  >
            <Link to="/" style={{textDecorationLine: "none", color: "#00e4c9"}} ><h2>Lynch</h2></Link>

        </div >
    )
}

export default Navbar
