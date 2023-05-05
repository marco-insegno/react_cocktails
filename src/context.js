import { useState, useContext, createContext, useEffect } from 'react';

import useFetch from './useFetch';

// creo Context
const AppContext = createContext()

// creo componente AppProvider che ritorna il Context
const AppProvider = ({ children }) => {

    const [query, setQuery] = useState('negroni')

    const { data, isLoading, isError, count } = useFetch(`s=${query}`)

    const [scrollPosition, setScrollPosition] = useState(0)

    const searchCocktail = (input) => {
        setQuery(input)
    }

    const getScrollPosition = (value) => {
        setScrollPosition(value)
    }

    const deleteScrollPosition = (value) => {
        setScrollPosition(0)
    }

    return (
        <AppContext.Provider value={{
            query,
            data,
            isLoading,
            isError,
            count,
            searchCocktail,
            scrollPosition,
            getScrollPosition,
            deleteScrollPosition
        }}>
            {children}
        </AppContext.Provider>
    )
}

//creo customHook che ci permette di utilizzare il nostro Context
const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppProvider, useGlobalContext } 