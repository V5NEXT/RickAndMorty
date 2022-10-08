import React from 'react'

const CharacterCard = (props) => {
console.log(props.characters.status);
 return (
    <div className="block p-1 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <img src={props.characters.image}/>
    <div className='flex-auto w-64'>
    <span className="mb-2 text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.characters.name}</span>
    <span className={props.characters.status === 'Alive'? 'h-0.5 w-0.5 mr-0.375rem bg-green rounded-full':'h-0.5 w-0.5 mr-0.375rem bg-red rounded-full'}></span>
    </div>
    </div>
  )
}

export default CharacterCard
