import React from 'react'
import Header from '../components/Header'
import imgBg from '../assets/img/about-header.jpg'
import imgDf from '../assets/img/header-image-default.jpg'
import teamImg from '../assets/img/team-img.jpg'
import { valueCards, teamCards } from '../utils/info'
import CardApp from '../components/Card'
import './styles/about.css'

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

      <section className="container my-5 py-5">
        <div className="row">
          <div className="col-12 text-center text-uppercase">
            <h1 className='font-logo'>Il nostri servizi</h1>
          </div>
        </div>
      </section>

      <section className="container my-5 pb-5">
        <div className="row">

          {
            valueCards && valueCards.map((valueCard) => {
              return (

                  <CardApp key={valueCard.id} {...valueCard}/>

              )
            })
          }

        </div>
      </section>

      <section className="container-fluid about-team-custom" style={{
                background: `url(${teamImg})`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
            }}>
      </section>

      <section className="container my-5 py-5">
        <div className="row">
          <div className="col-12 text-center text-uppercase">
            <h1 className='font-logo'>Il nostro Team</h1>
          </div>
        </div>
      </section>

      <section className="container my-5 pb-5">
        <div className="row">

          {
            teamCards && teamCards.map((teamCard) => {

              return (
                  <CardApp key={teamCard.id} {...teamCard}/>
              )
            })
          }

        </div>
      </section>




    </>
  )
}

export default About