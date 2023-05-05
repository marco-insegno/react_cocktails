import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import './styles/cardCocktail.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListCheck } from '@fortawesome/free-solid-svg-icons';
import { useGlobalContext } from '../context';
import { useNavigate } from 'react-router-dom';

function CardCocktail({ strDrink: name, strDrinkThumb: img, idDrink: id }) {

  const [show, setShow] = useState(false)

  const {scrollPosition, getScrollPosition, deleteScrollPosition} = useGlobalContext()

  const navigate = useNavigate()

  const goToCocktail = (_id) => {
    getScrollPosition(window.pageYOffset)
    navigate(`/cocktail/${_id}`);
  }

  return (

    <div className="col-12 col-sm-6 col-lg-4 mb-4" onMouseEnter={()=> setShow(true)} onMouseLeave={()=> setShow(false)}>
      <Card className="bg-dark text-white position-relative rounded-0">
        <Card.Img src={img} alt={name} className='rounded-0' />
        <Card.ImgOverlay className='px-0 rounded-0'>

          <div className={`bg-info-card position-absolute bottom-0 w-100 d-flex justify-content-between align-items-center px-2 py-3 ${show ? "d-block" : "d-none"}`}>

            <Card.Title className="mb-0 fs-6">{name}</Card.Title>

            <FontAwesomeIcon icon={faListCheck} style={{
              color: 'var(--second-color)',
              cursor: 'pointer'
            }} onClick={()=>goToCocktail(id)}/>

          </div>

        </Card.ImgOverlay>
      </Card>
    </div>
  )
}

export default CardCocktail