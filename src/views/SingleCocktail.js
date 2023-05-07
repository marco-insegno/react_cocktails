import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../useFetch'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import imgBg from '../assets/img/cocktail-header.jpg'
import Badge from 'react-bootstrap/Badge';
import useTitle from '../useTitle'

function SingleCocktail() {

  const { id } = useParams()

  const { isLoading, isError, data } = useFetch(`i=${id}`, true)

  useTitle(data[0] ? data[0].strDrink : 'Not Found')
  

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

    const strInstructionsList = [
      {
        istruzione: strIngredient1,
        qty: strMeasure1
      },
      {
        istruzione: strIngredient2,
        qty: strMeasure2
      },
      {
        istruzione: strIngredient3,
        qty: strMeasure3
      },
      {
        istruzione: strIngredient4,
        qty: strMeasure4
      },
      {
        istruzione: strIngredient5,
        qty: strMeasure5
      },
    ]



    return (

      <>


        <section className="container-fluid d-flex justify-content-center align-items-center" style={{

          background: `linear-gradient(0deg, rgba(222, 215, 34,0.5) 0%, rgba(0,0,0,0.5) 100%), url(${imgBg})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          height: '90vh',
        }}>

          <div className="row d-flex justify-content-center mx-md-2">
            <div className="col-10 col-md-6">
              <img src={image} style={{
                width: '100%',
                borderRadius: '40px',
                border: '2px dotted white'
              }} />
            </div>
            <div className="col-12 col-md-6 text-white d-flex flex-column align-items-center align-items-md-start mt-5">
              <h1 className='font-logo'>{name}</h1>
              <div className='mt-2 text-center'>
                <Badge className="bg-red me-2">{category}</Badge>
                <Badge className="bg-red me-2">{type}</Badge>
                <Badge className="bg-red me-2">{strGlass}</Badge>
              </div>


              <h4 className='mt-5'>Ingredienti:</h4>
              <ul>
                {
                  strInstructionsList.map((el, index) => {

                    if (el.istruzione) {
                      return (
                        <li key={index}>{el.qty} {el.istruzione}</li>
                      )
                    }
                  })
                }
              </ul>

              <h4 className='mt-3'>Istruzioni:</h4>

              {
                strInstructionsIT 
                ? <h6>{strInstructionsIT}</h6> 
                : <h6>{strInstructions}</h6>
              }

            </div>
          </div>

        </section>

      </>

    )
  }
}

export default SingleCocktail