import React from 'react'
import '../css/homepage.css'

const Hook = () => {
    return (
        <div className="hook" style={{
            width: "100vw", 
            height: "35vh", 
            textAlign: "center", 
            padding: "2rem 0 0 0", 
            margin: "0", 
            backgroundColor: "#ebebeb", 
            display: "inline-block"
    }} >
                <div className="description">
             <h1>Therapy, Easier Than Ever</h1>
                    <p>Join the journey for faster recovery!</p>
            <button>Buy Now</button>
                </div>
        </div>
    )
}

export default Hook
