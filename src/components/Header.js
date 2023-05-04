import React from 'react'
import './styles/header.css'

function Header({ children, img, imgDefault, disableOverlay }) {

    const image = img ? img : imgDefault;

    return (
        <section className="container-fluid vh-10 header-custom px-0 d-flex align-items-center justify-content-center"
            style={{
                background: `${
                    disableOverlay 
                    ? `url(${image})`
                    : `linear-gradient(0deg, rgba(222, 215, 34,0.5) 0%, rgba(0,0,0,0.5) 100%), url(${image})`
                }`
                ,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
            }}>

            <section className='container'>{children}</section>
        </section>
    )
}

export default Header