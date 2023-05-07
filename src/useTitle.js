import {useEffect} from 'react';

const useTitle = (title) =>{

    useEffect(()=> {

        document.title = `WikiDrink - ${title}`;

    },[title])

}

export default useTitle