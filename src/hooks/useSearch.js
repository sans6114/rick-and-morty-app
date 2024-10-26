import {
  useEffect,
  useRef,
  useState,
} from 'react';

export const useSearch = () => {
    const [search, setSearch] = useState('')
    const [error, setError] = useState(null)
    const isFirstInput = useRef(true)
  
    useEffect(() => {
      if (isFirstInput.current) {
        isFirstInput.current = search === ''
        return
      }
      if (search === '') {
        setError({ message: 'you cant search empty names' })
        return
      }
      if (search.length < 4) {
        setError({ message: 'you cant search names with less than 4 characters' })
        return
      }
      if(!isNaN(search)){
        setError({ message: 'you cant search numbers' })
        return
      }
      setError(null)
    }, [search])
  
    return {
      search,
      setSearch,
      error
    }
  }