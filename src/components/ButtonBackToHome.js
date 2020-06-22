import React from 'react'
import { Link } from 'react-router-dom'

const ButtonBackToHome = () => {
    return (
        <Link
            className="button is-primary"
            to={'/'}
        >
            <span className="icon">
                <i className="fa fa-home"></i>
            </span>
            <span>Home</span>
        </Link>
    )
}

export default ButtonBackToHome;