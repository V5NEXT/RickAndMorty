import React, {useState, useEffect} from 'react';
import { useCharacters } from '../customhooks/useCharacters';
import CharacterCard from './CharacterCard';


const CharacterList = () => {
const [search, Setsearch] = useState('');
const searchItems = (searchValue) => {
      Setsearch(searchValue);  
}

const {error,data,loading} = useCharacters();

if(loading) return <div className="w-12 h-12 rounded-full animate-spin
border-2 border-solid border-blue-500 border-t-transparent"></div>

if(error) return <div>Errrorrrr....</div>

  return (
    <div className="container">
      {/* <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div> */}
        <input value={search} onChange={(e)=> searchItems(e.target.value)} type="search" id="default-search" className="block mb-10 p-4 pl-10 w-80 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search For Characters.." required></input>
    <div className="flex flex-wrap space-x-4">
     
      {data.characters.results.map((character) =>{
        return <CharacterCard className="" key={character.id} characters={character} />
      })}
    </div>
    </div>
  )
}

export default CharacterList