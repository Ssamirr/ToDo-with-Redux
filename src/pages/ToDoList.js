import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteItem, update } from '../redux/actions/toDoActionsCreator';
import { Modal } from 'antd';

function ToDoList() {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = (item) => {
        setUpdatedItem({ id: item.id, text: item.text })
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const [updatedItem, setUpdatedItem] = useState({ id: "", text: "" });

    const toDos = useSelector((state => state));
    const dispatch = useDispatch()

    const submitForm = (event) => {
        event.preventDefault();
        dispatch(update(updatedItem))
        setIsModalOpen(false)
    }

    return (
        <>
            {toDos.length ? (
                <>
                    <h1 className='todo-list'>Todo list</h1>

                    <table className="w3-table-all w3-centered">
                        <thead>
                            <tr>
                                <td>Id</td>
                                <td>Title</td>
                                <td>Delete</td>
                                <td>Update</td>
                            </tr>
                        </thead>
                        <tbody>
                            {React.Children.toArray(
                                toDos.map(item => (
                                    <tr>
                                        <td>{item?.id}</td>
                                        <td>{item?.text}</td>
                                        <td>
                                            <button onClick={() => dispatch(deleteItem(item))}>Delete</button>
                                        </td>
                                        <td>
                                            <button onClick={() => showModal(item)}>Update</button>
                                        </td>
                                        <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                                            <form onSubmit={(event) => submitForm(event)}>
                                                <div className='modal-list'>
                                                    <input onChange={(e) => setUpdatedItem({ ...updatedItem, text: e.target.value })} value={updatedItem.text} />
                                                    <button>Update</button>
                                                </div>
                                            </form>
                                        </Modal>
                                    </tr>

                                ))
                            )
                            }

                        </tbody>
                    </table>
                </>
            ) :
                <h1 className='not-list'>Todo list is empty</h1>
            }

        </>
    )
}

export default ToDoList