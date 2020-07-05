import React from 'react'
import '../css/email.css'

const Contact = () => {
    return (
        <div className="contact">
                <h1>Subscribe to Our Newsletter</h1>
                <div className="description">
                    <p>Join the journey for faster recovery!</p>
                </div>
            <form className="form" netlify="true">
                <div className="input">
                    <input type="text" className="button" id="email" name="email" placeholder="email@example.com" />
                    <input type="submit" className="button" id="submit" value="SIGN UP" />
                </div>
            </form>
        </div>
    )
}

export default Contact
