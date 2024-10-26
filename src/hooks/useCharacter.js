import {
  useCallback,
  useMemo,
  useRef,
  useState,
} from 'react';

import { getCharacterService } from '../services/getCharacters';

export const useCharacter = (search, sort) => {
    const [characters, setCharacters] = useState([])
    const [loading, setLoading] = useState(false)
    const previousSearch = useRef(search)
    
    const getCharacters = useCallback( async (search) => {
        if(search === previousSearch.current) return
        try {
            setLoading(true)
            previousSearch.current = search
            const characters = await getCharacterService(search)
            setCharacters(characters || [])
        } catch (error) {
            console.log('error searching the characters', error)
            setCharacters([])
        } finally{
            setLoading(false)
        }
    }, [])


    const sortedCharacters = useMemo(() => {
        return sort 
        ? [...characters].filter(character => character.status === 'Alive')
        : characters
    }, [sort, characters])

    return {
        characters: sortedCharacters,
        getCharacters,
        loading
    }
}