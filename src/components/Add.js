import React ,{useState}from 'react'
import Modal from '@material-ui/core/Modal'
import AddIcon from '@material-ui/icons/Add';
function Add() {
    const [open,setOpen]=useState(false)
    const [NewWord,setNewWord]=useState('')
    // Function Open the modal
    const handleOpen=()=>{
        setOpen(true)
    }
    // Function to close the modal
    const handleClose=()=>{
        setOpen(false)
    }
    // Function to add new word
    const AddNewWord=(e)=>{
        e.preventDefault();
        console.log(NewWord)
    }
    return (
        <div>
            {/* Button to open the modal to add new word */}
            <button className="add_btn" onClick={handleOpen}>
                <AddIcon/>
            </button>
            {/* Modal containing add new word form */}
             <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-model-title"
                aria-describedby="simple-modal-description"
            >
                <div className="Add_modal_box">
                    <h4 id="simple-model-title">Add to Dictionary</h4>
                    <br/>
                    <div id ="simple-modal-description">
                        <p style={{color:'purple',fontWeight:'550',margin:'10px'}}>New Word</p>
                        <form onSubmit={AddNewWord}>
                            <input 
                            className="add_input_field"
                            type="text" 
                            placeholder="Enter a Word"
                            onChange={(e)=>setNewWord(e.target.value)}
                            value={NewWord}
                            />
                            <button  className="modal_btn"onClick={handleClose}>Cancel</button>
                            <button className="modal_btn" type="submit">Add</button>
                        </form>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default Add
