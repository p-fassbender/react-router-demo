import React from 'react'
import { useAuth } from './auth'
import { Navigate, useLocation } from 'react-router'

export const RequireAuth = ({ children }) => {
    const location = useLocation()
    const auth = useAuth()

    if (!auth.user) {
        return <Navigate to='/login' state={{path: location.pathname}}/>
    }

    return children
}
