import React, { useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Header from '../components/Header'
import imgBg from '../assets/img/home-header.jpg'
import imgDf from '../assets/img/header-image-default.jpg'
import Lottie from "lottie-react";
import cocktail from '../cocktail.json';
import './styles/home.css'
import { useGlobalContext } from '../context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Cocktails from '../components/Cocktails';
import useTitle from '../useTitle';

function Home() {

  useTitle('Home')

  const {
    query,
    data,
    isLoading,
    isError,
    count,
    searchCocktail,
    scrollPosition,
    deleteScrollPosition } = useGlobalContext()

  const [input, setInput] = useState(query)

  const handleSubmit = (e) => {
    e.preventDefault()
    searchCocktail(input)
  }

  useEffect(() => {

    if(scrollPosition){
      window.scrollTo(0,scrollPosition)
      deleteScrollPosition()
    }

  },[])

  return (
    <>
      <Header img={imgBg} imgDefault={imgDf} disableOverlay>
        <div className="row text-white px-5 px-sm-0">
          <div className="col-12 col-md-7 d-flex flex-column justify-content-center align-items-center align-items-md-start">
            <h1 className='text-uppercase text-center text-md-start mb-3 display-4 font-logo'>WikiDrinks</h1>
            <h5 className='text-uppercase text-center text-md-start my-5 my-sm-0'>Tutti i cocktail del mondo a portata di click</h5>
            <p className='my-5 text-center text-md-start d-none d-sm-block'>Wiki Drink è un database internazionale che mette a tua disposizione, in maniera <span style={{ color: 'var(--second-color)' }}>Gratuita</span>, le ricette dei più importanti e diffusi cocktail al mondo</p>
            <div className='text-center text-md-start'>
              <Button className='btn-custom text-uppercase p-3 px-4 mt-sm-4'>Scopri di più</Button>

            </div>
          </div>
          <div className="col-12 col-md-5">
            <Lottie animationData={cocktail} className='animation-custom' />
          </div>
        </div>
      </Header>

      <section className="container mt-5 pt-5 px-4 position-relative z-index-3">
        <div className="row mt-sm-5 mt-md-0 ">

          <div className="col-12 col-lg-4 mb-3 col-xl-4 col-xxl-3">
            <h2 className='font-logo'>Cerca il tuo drink </h2>
          </div>

          <div className="col-10 col-md-7 col-lg-4 col-xl-3">
            <Form className="d-flex" onSubmit={handleSubmit}>
              <Form.Control
                type="search"
                placeholder={query}
                className="me-2 rounded-5"
                aria-label="Search"
                id="drink"
                // value={input}
                onChange={(e) => setInput(e.target.value.toLowerCase())}
              />
              <Button type='submit' className='btn-custom rounded-circle'>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </Button>
            </Form>
            {
              count === 0
                ? <p className='text-muted fst-italic mt-2'>{count} risultati</p>
                : <p className='text-muted fst-italic mt-2'>{count} risultati
                  per <span className='text-capitalize'>{query}</span>
                </p>
            }
          </div>
        </div>
      </section>

      {
        !isLoading && isError
          ? <section className="container">
            <div className="row">
              <div className="col-10 col-sm-10 col-md-7 col-lg-8 col-xl-7 col-xxl-6">
                <Alert key='danger' variant='danger'>
                  Nessun cocktail trovato per la ricerca {query}
                </Alert>
              </div>
            </div>
          </section>
          : !isLoading && !isError
            ? <Cocktails data={data} />
            : <p>Loading...</p>
      }


    </>
  )
}

export default Home