import React from 'react'

function UsersList(props) {
    return (
        <ul>
        {props.data.map(e => {
            return <li key={e.name}>{e.name} {e.age} yrs old</li>
        })}
        </ul>
    )
}

export default UsersList
