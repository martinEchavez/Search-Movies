import React from 'react'
import ButtonBackToHome from '../components/ButtonBackToHome'

const NotFount = () => {
    return (
        <div className="card">
            <div className="content">
                <h1 className="title">401</h1>
                <p className="subtitle">Página no encontrada</p>
                <ButtonBackToHome/>
            </div>
        </div>
    )
}

export default NotFount;