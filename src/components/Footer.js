import React from 'react'
import SocialIcons from './SocialIcons'
import './styles/footer.css'

function Footer() {
  return (

    <section className="d-flex justify-content-center justify-content-lg-between p-4 border-top position-absolute end-0 start-0 bottom-0 bg-light footer-custom">

      <div className="d-none d-lg-block me-5">
        <span>© 2023 || SmarcodE</span>
      </div>

      <div>
        <SocialIcons />
      </div>

    </section>

  )
}

export default Footer