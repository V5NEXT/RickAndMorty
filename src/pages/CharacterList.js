import React, {useState, useEffect} from 'react';
import { useQuery, gql } from '@apollo/client';
import CharacterCard from './CharacterCard';

const GET_CHARACTERS = gql`
query {
    characters{
      results{
        id
        name
        image
        type
        
      }
    }
}
`

const CharacterList = () => {
const [search, Setsearch] = useState('');
const {error, data, loading} = useQuery(GET_CHARACTERS);


const searchItems = (searchValue) => {
      Setsearch(searchValue);  
}




if(loading) return <div><button type="button" className="bg-indigo-500 ..." disabled>
                        <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
                        </svg>
                        Loading...
                        </button></div>

if(error) return <div>Errrorrrr....</div>

  return (
    <div className="container">
      <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        <input value={search} onChange={(e)=> searchItems(e.target.value)} type="search" id="default-search" className="block mb-10 p-4 pl-10 w-80 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required></input>
    <div className="flex flex-wrap space-x-4">
     
      {data.characters.results.map((character) =>{
        return <CharacterCard key={character.id} characters={character} />
      })}
    </div>
    </div>
  )
}

export default CharacterList