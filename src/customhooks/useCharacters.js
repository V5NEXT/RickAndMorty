import { useQuery, gql } from '@apollo/client';


const GET_CHARACTERS = gql`
query {
    characters{
      results{
        id
        name
        image
        type
        status
        
      }
    }
}
`

// const GET_SPECIFIC_CHARACTER = gql`
// query{
//   characters{
//     name = name

//   }

// }

// `



export const useCharacters = ()=>{

const {error, data, loading} = useQuery(GET_CHARACTERS);

return {error,data,loading};
}

// export const useSpecificCharacter = (name) => {
//   const {error, data, loading}= useQuery(name);

//   return {error, data, loading};
// }