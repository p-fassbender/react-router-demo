import React from 'react'
import { useParams } from 'react-router'

export const UserDetails = () => {
    const { userId } = useParams()

    return (
        <div>Details about user {userId}</div>
    )
}
