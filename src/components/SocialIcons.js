import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

function SocialIcons() {
    return (
        <>
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" >
                <FontAwesomeIcon className="me-3 social-link" icon={faFacebook} />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                <FontAwesomeIcon className="me-3 social-link" icon={faTwitter} />
            </a>
            <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
                <FontAwesomeIcon className="me-3 social-link" icon={faYoutube} />
            </a>
        </>
    )
}

export default SocialIcons