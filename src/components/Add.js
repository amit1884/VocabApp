import React ,{useState}from 'react'
import Modal from '@material-ui/core/Modal'
import AddIcon from '@material-ui/icons/Add';
function Add() {
    const [open,setOpen]=useState(false)
    const handleOpen=()=>{
        setOpen(true)
    }
    const handleClose=()=>{
        setOpen(false)
    }
    return (
        <div>
            <button className="add_btn" onClick={handleOpen}>
                <AddIcon/>
            </button>
             <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-model-title"
                aria-describedby="simple-modal-description"
            >
                <div>
                    <h2 id="simple-model-title">Add new Word</h2>
                    <p id ="simple-modal-description">ksjbksbdsbvsd</p>
                </div>
            </Modal>
        </div>
    )
}

export default Add
