import React from 'react'

const Footer = () => {
    const today = new Date();
    return (
        <footer>
            <h3>Footer</h3>
            <p className="copyright">Copyright {today.getFullYear()}</p>
        </footer>
    )
}

export default Footer