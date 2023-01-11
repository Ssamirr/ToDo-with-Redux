import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <>
            <div className='header'>
                <ul className='header-ul'>
                    <li>
                        <Link to="/">AddToDo</Link>
                    </li>
                    <li>
                        <Link to="/list">ToDo List</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Header