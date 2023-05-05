import React from 'react'
import './styles/header.css'

function Header({ children, img, imgDefault, disableOverlay }) {

    const image = img ? img : imgDefault;

    return (
        <section className={`${img === '/static/media/contact-header.4791df0ed0805bd1c5b6.jpg' 
        ? "container-fluid header-contact px-0 d-flex align-items-center justify-content-center"
        : "container-fluid header-custom px-0 d-flex align-items-center justify-content-center"}`}
            style={{
                background: `${
                    disableOverlay 
                    ? `linear-gradient(45deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.6) 100%),url(${image})`
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