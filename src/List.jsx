import React from 'react'
import { people } from './data'
import Profile from './components/Profile'

const List = ({searchText}) => {
    
    const listPeople = people.filter(person => person.profession.startsWith(searchText))

    return (
        <div className=''>
            {listPeople && listPeople.map(person => 
                <Profile
                    key={person.id}
                    name={person.name}
                    profession={person.profession}
                    accomplishment={person.accomplishment}
                    imageId={person.imageId}
                    /> 
            )}
        </div>
    )
}

export default List
