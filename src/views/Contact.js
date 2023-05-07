import React from 'react'
import Header from '../components/Header'
import FormContact from '../components/FormContact'
import imgBg from '../assets/img/contact-header.jpg'
import imgDf from '../assets/img/header-image-default.jpg'
import useTitle from '../useTitle'


function Contact() {

  useTitle('Contact')
  
  return (
    <>
      <Header disableOverlay img={imgBg} imgDefault={imgDf} className='header-contact'>

        <div className="row justify-content-center">
          <div className="col-10 text-center d-flex flex-column align-items-center" style={{
            color: 'var(--light-color)',
          }}>
            <h1 className='display-4 mb-4 font-logo' >Vorresti aggiungere un cocktail?</h1>

            <div className="col-10 text-center">
              <h4>Il nostro team è sempre disponibile per valutare possibili nuove ricette ed ad aggiungerle alla nostro database</h4>
            </div>

          </div>
        </div>

        <FormContact />

      </Header>



    </>
  )
}

export default Contact