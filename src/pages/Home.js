import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { add } from '../redux/actions/toDoActionsCreator'

function Home() {

    const [value, setValue] = useState("");

    const dispatch = useDispatch()

    const submitForm = (event) => {
        event.preventDefault();
        dispatch(add(value))
        setValue("");
    }

    return (
        <>
            <div className='add-form'>
                <form onSubmit={(event) => submitForm(event)}>
                    <h1>Add To List</h1>
                    <input autoFocus required value={value} onChange={(e) => setValue(e.target.value)} placeholder='Title' />
                    <button >Add</button>
                </form>

            </div>
        </>
    )
}

export default Home