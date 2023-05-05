import React from 'react'
import { useParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import useFetch from '../useFetch'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import imgBg from '../assets/img/cocktail-header.jpg'
import imgDf from '../assets/img/header-image-default.jpg'

function SingleCocktail() {

  const { id } = useParams()

  const { isLoading, isError, data } = useFetch(`i=${id}`, true)

  if (isLoading) {
    return (
      <p>Loading</p>
    )
  }

  if (isError) {

    return (

      <section className="container mt-5 d-flex justify-content-center">
        <div className="row">
          <div className="col-12 text-center">
            <h3>Nessun cocktail trovato</h3>
            <Link to='/'>
              <button className="btn btn-custom mt-4">Torna alla home</button>
            </Link>
          </div>
        </div>
      </section>
    )
  }


  if (data.length > 0) {

    const { strDrink: name,
      strCategory: category,
      strAlcoholic: type,
      strGlass,
      strDrinkThumb: image,
      strIngredient1,
      strIngredient2,
      strIngredient3,
      strIngredient4,
      strIngredient5,
      strMeasure1,
      strMeasure2,
      strMeasure3,
      strMeasure4,
      strMeasure5,
      strInstructionsIT,
      strInstructions,
      strVideo: video

    } = data[0];

    return (


      <>

        <Header disableOverlay img={imgBg} imgDefault={imgDf} className='header-contact'>

          <div className="row">
            <div className="col-12 col-md-6">
              <img src={image} style={{
                width: '100%',
                borderRadius: '40px'
              }} />
            </div>
            <div className="col-12 col-md-6 text-white font-logo">
              <h1>{name}</h1>
            </div>
          </div>



        </Header>

        {/* <section className="container-fluid px-0">
          <div className="row">
            <div className="col-6">
              <img src={image} style={{
                width: '100%',
              }} />
            </div>
            <div className="col-6"><h1>cock</h1></div>
          </div>
        </section> */}




      </>

    )
  }
}

export default SingleCocktail