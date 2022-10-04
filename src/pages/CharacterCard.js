import React from 'react'

const CharacterCard = (props) => {
 return (
    <div className="block p-1 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <h5 className="mb-2 text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.characters.name}</h5>
    <img src={props.characters.image}/>
    </div>
  )
}

export default CharacterCard