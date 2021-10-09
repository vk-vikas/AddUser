import React from 'react'
import Card from '../UI/Card'

function UsersList(props) {
    return (
        <ul>
        {props.data.map(e => {
            return (<Card><li key={e.name}>{e.name} who is {e.age} yrs old</li></Card>)
        })}
        </ul>
    )
}

export default UsersList
