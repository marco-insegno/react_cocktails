import React from 'react'
import Header from '../components/Header'
import imgBg from '../assets/img/home-header.jpg'
import imgDf from '../assets/img/header-image-default.jpg'
import Button from 'react-bootstrap/Button';
import Lottie from "lottie-react";
import cocktail from '../cocktail.json';
import './styles/home.css'

function Home() {
  return (
    <>
      <Header img={imgBg} imgDefault={imgDf} disableOverlay>
        <div className="row text-white px-5 px-sm-0">
          <div className="col-12 col-md-7 d-flex flex-column justify-content-center">
            <h1 className='text-uppercase text-center text-md-start mb-3'>Wiki Drink</h1>
            <h5 className='text-uppercase text-center text-md-start'>Tutti i cocktail del mondo a portata di click</h5>
            <p className='my-5 text-center text-md-start'>Wiki Drink è un database internazionale che mette a tua disposizione, in maniera <span style={{ color: 'var(--second-color)' }}>Gratuita</span>, le ricette dei più importanti e diffusi cocktail al mondo</p>
            <div className='text-center text-md-start'>
              <Button className='btn-custom text-uppercase p-3 px-4 mt-sm-4'>Scopri di più</Button>

            </div>
          </div>
          <div className="col-12 col-md-5">
            <Lottie animationData={cocktail} className='animation-custom'/>
          </div>
        </div>

      </Header>
    </>
  )
}

export default Home