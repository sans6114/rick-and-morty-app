import {
  useCallback,
  useState,
} from 'react';

import debounce from 'just-debounce-it';

import { CharacterCard } from './components/CharacterCard';
import { useCharacter } from './hooks/useCharacter';
import { useSearch } from './hooks/useSearch';

export const App = () => {
  const { setSearch, search, error } = useSearch()
  const [sort, setSort] = useState(false)
  const { characters, getCharacters, loading } = useCharacter(search, sort)


const debouncedGetCHaracters = useCallback( debounce(search => {
  console.log('search')
  getCharacters(search)
},300), [getCharacters])


  const handleSubmit = (e) => {
    e.preventDefault()
    getCharacters(search)
  }

  const handleChange = (e) => {
    const newSearch = e.target.value
    setSearch(newSearch)
    debouncedGetCHaracters(search)
  }

  const handleSort = () => {
    setSort(!sort)
  }

  return (
    <div className='flex flex-col max-w-7xl mx-auto items-center'>
      {/* my header with the searching */}
      <header className='my-10'>
        <h1 className="text-4xl font-bold text-center">Rick and Morty App</h1>
        <form onSubmit={handleSubmit} className="flex flex-col mt-5">
          <div className='flex'>
          <input value={search} onChange={handleChange} className="font-medium p-3 rounded-xl mx-2 text-black" type="text" name="search" placeholder="Rick, Morty..." />
          <button type='submit' className="button">Search with name</button>
          </div>
          <div className='flex w-full justify-start items-center gap-2 p-2 mt-2'>
            <span className='text-md font-bold'>sort the searching with Alive characters</span>
          <label className="relative inline-flex items-center cursor-pointer">
            
            <input onChange={handleSort} type="checkbox" checked={sort} value={sort} className="sr-only peer" />
            <div className="peer ring-0 bg-rose-400  rounded-full outline-none duration-300 after:duration-500 w-12 h-12  shadow-md peer-checked:bg-emerald-500  peer-focus:outline-none  after:content-['✖️'] after:rounded-full after:absolute after:outline-none after:h-10 after:w-10 after:bg-gray-50 after:top-1 after:left-1 after:flex after:justify-center after:items-center  peer-hover:after:scale-75 peer-checked:after:content-['✔️'] after:-rotate-180 peer-checked:after:rotate-0">
            </div>
          </label>
          </div>
        </form>
        {error && <span className='text-red-500'>Error! {error.message}</span>}

      </header>
      {/* mymain with the characters */}
      <main>
        {
          loading ?
            <p>Loading...</p>
            : <div className="md:p-4 grid grid-cols-1 md:grid-cols-3 grid-rows-1 gap-2">
              {
                characters.map(character => (
                  <CharacterCard key={character.id} character={character} />
                ))
              }
            </div>
        }
      </main>
    </div>
  )
}
