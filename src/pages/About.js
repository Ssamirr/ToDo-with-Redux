import React from 'react'
import { useSelector } from 'react-redux';

function About() {

    const toDos = useSelector((state => state));

    return (
        <>{toDos.length === 0 ?
            <h1 className='not-list'> List is empty</h1>
            :
            <h1 className='not-list'> There {toDos.length === 1 ? "is" : "are"} {toDos.length} {toDos.length === 1 ? "title" : "titles"} in the list</h1>
        }
        </>
    )
}

export default About