import React from 'react'
import { Route, Routes } from 'react-router-dom'
import TodoLayout from '../components/ToDoLayout'
import About from '../pages/About'
import Home from '../pages/Home'
import ToDoList from '../pages/ToDoList'

function TodoRoutes() {
    return (
        <Routes>
            <Route path='/' element={<TodoLayout />}>
                <Route index element={<Home />}></Route>
                <Route path='/list' element={<ToDoList />}></Route>
                <Route path='/about' element={<About />}></Route>
            </Route>
        </Routes>
    )
}

export default TodoRoutes