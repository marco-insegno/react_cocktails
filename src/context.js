import { useState, useContext, createContext, useEffect } from 'react';
import useFetch from './useFetch';

// creo Context
const AppContext = createContext()

// creo componente AppProvider che ritorna il Context
const AppProvider = ({ children }) => {

    const {data} = useFetch('s=martini')

    return (
        <AppContext.Provider value={{
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