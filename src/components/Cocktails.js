import React from 'react'
import CardCocktail from './CardCocktail'

function Cocktails({ data }) {

    return (
        <>
            <section className="container my-5 pb-3">
                <div className="row px-5 px-sm-2 px-lg-5">
                    {
                        data && data.map((cocktail) => {

                            return (

                                <CardCocktail key={cocktail.idDrink} {...cocktail} />

                            )
                        })
                    }
                </div>
            </section>
        </>
    )
}

export default Cocktails