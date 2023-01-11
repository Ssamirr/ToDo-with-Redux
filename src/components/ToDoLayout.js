import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'

function TodoLayout() {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}

export default TodoLayout