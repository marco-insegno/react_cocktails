import { useState, useEffect } from 'react';
const urlSearchByName = "https://www.thecocktaildb.com/api/json/v1/1/search.php?";
const urlSearchById = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?";

function useFetch(query, type = false) {

    const url = type ? urlSearchById : urlSearchByName;

    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [data, setData] = useState([])
    const [count, setCount] = useState(0);


    useEffect(() => {

        setIsLoading(false)
        setIsError(false);

        fetch(`${url}${query}`)
            .then((response) =>response.json())
            .then(data => {
                setCount(data.drinks.length)
                setData(data.drinks)
            }
            )
            .catch((err) => {
                setIsError(true);
                setCount(0)
                setIsLoading(false)
            })

    }, [url, query])

    return (
        { isLoading, isError, data, count }
    )
}

export default useFetch