import React from 'react'
import Header from '../components/Header'
import imgBg from '../assets/img/about-header.jpg'
import imgDf from '../assets/img/header-image-default.jpg'

function About() {


  return (
    <>
      <Header img={imgBg} imgDefault={imgDf}>
        <div className="row justify-content-center">
          <div className="col-8 text-center">
            <h3 style={{
              color: 'var(--light-color)',
              fontStyle: 'italic',
              lineHeight: '35px',
              borderTop: '3px dotted var(--second-color)',
              borderBottom: '3px dotted var(--second-color)',
              borderBlockWidth: '2px',
              padding: '25px 0',

            }}>"Grande è la fortuna di colui che possiede una buona bottiglia, un buon libro, un buon amico"</h3>
          </div>
        </div>
      </Header>

      <section className="container">
        <div className="row">
          <div className="col-12">About</div>
        </div>
      </section>
    </>
  )
}

export default About