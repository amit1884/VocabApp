import React ,{useState}from 'react'
import axios from 'axios' 
import Modal from '@material-ui/core/Modal'
import AddIcon from '@material-ui/icons/Add';
function Add() {
    const ApiDetails={
        app_id : "5c4cb6ce",
        app_key : "eda438bdd760731c0054b187c7aafa97",
        language : "en-gb",
        word_id : "example",
    }
    const [open,setOpen]=useState(false)
    const [NewWord,setNewWord]=useState('')
    const [Data,setData]=useState({
        id:'',
        origin:'',
        category:'',
        senses:[]
    })
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
        setOpen(false)  
        console.log(NewWord)

        axios.get(`/${NewWord}?strictMatch=false`,{
            headers:{
                'app_id': ApiDetails.app_id,
                'app_key': ApiDetails.app_key
            }
        })
        .then(res=>{
            console.log('result origin ',res.data.results[0].lexicalEntries[0].entries[0].etymologies)
            console.log('result category  ',res.data.results[0].lexicalEntries[0].lexicalCategory)
            console.log('result  Id',res.data.results[0].id)
            console.log('result senses ',res.data.results[0].lexicalEntries[0].entries[0].senses)
            
            axios.get('https://vocabapi.herokuapp.com/add',{params:{data:{
                id:res.data.results[0].id,
                origin:res.data.results[0].lexicalEntries[0].entries[0].etymologies,
                category:res.data.results[0].lexicalEntries[0].lexicalCategory.text,
                senses:res.data.results[0].lexicalEntries[0].entries[0].senses
            }}})
            .then(res=>{
                console.log(res)
            })
            .catch(err=>console.log(err))
           
        })
        .catch(err=>console.log(err))
        
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
                    <h4 id="simple-model-title" style={{fontSize:'20px'}}>Add to Dictionary</h4>
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
