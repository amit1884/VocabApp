import React ,{useState}from 'react'
import {Link} from 'react-router-dom'
import Modal from '@material-ui/core/Modal'
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import axios from 'axios'
function Search() {
    const ApiDetails={
        app_id : "5c4cb6ce",
        app_key : "eda438bdd760731c0054b187c7aafa97",
        language : "en-gb",
        word_id : "example",
    }
    const [Text,setText]=useState('')
    const [Senses,setSenses]=useState([])
    const [Id,setId]=useState('')
    const [Origin,setOrigin]=useState('')
    const [LexCategory,setLexCatogory]=useState({})

    const [open,setOpen]=useState(false)
    const handleOpen=()=>{
        setOpen(true)
    }
    const handleClose=()=>{
        setOpen(false)
    }

    const searchHandler=(e)=>{
        e.preventDefault();
        // setText(e.target.value)
        axios.get(`/${Text}`,{
            headers:{
                'app_id': ApiDetails.app_id,
                'app_key': ApiDetails.app_key
            }
        })
        .then(res=>{
            console.log(res.data.results)
            const org=res.data.results[0].lexicalEntries[0].entries[0].etymologies;
            const sense=res.data.results[0].lexicalEntries[0].entries[0].senses;
            const cat=res.data.results[0].lexicalEntries[0].lexicalCategory;
            const id=res.data.results[0].id;
            setId(id)
            setOrigin(org)
            setSenses(sense)
            setLexCatogory(cat)
        })
        .catch(err=>console.log(err))
    }
    return (
        <div>
            <div className="header_wrapper">
                <form onSubmit ={searchHandler}>
                    <input 
                    type="text" 
                    placeholder="Search ..."
                    onChange={(e)=>setText(e.target.value)}
                    value={Text}
                    style={{
                        width:'70vw',
                        padding:'10px',
                        background:'transparent',
                        border:'none',
                        color:'#fff',
                        borderBottom:'2px solid gray',
                        outline:'none'}}
                        />
                </form>
                <div style={{position:'absolute',right:'10%'}}>
                    <Link to ="/">
                    <IconButton aria-label="close" style={{color:"#fff"}} >
                    <CloseIcon />
                    </IconButton>
                    </Link>
                </div>
            </div>
            <div className="main_container">
                <div className="home_main_wrapper">
                 {
                     Id||LexCategory.text||Origin?
                     <div className="single_list_item" onClick={handleOpen}>
                    <h3><b>{Id}</b></h3>
                    <p>({LexCategory.text})&nbsp;{Origin}</p>
                    </div>
                    :null
                 }
                </div>
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-model-title"
                aria-describedby="simple-modal-description"
            >
                <div className="modal_card">
                    <IconButton aria-label="close" style={{color:"#000",float:'right'}} onClick={handleClose} >
                    <CloseIcon />
                    </IconButton>
                    <div className="modal_content">
                    <p id="simple-model-title">{Id}</p>
                    <hr/>
                    <br/>
                    <div id ="simple-modal-description">
                    <p style={{color:'gray'}}><i>{LexCategory.text}</i><br/>{Origin}</p>
                    <br/>
                    {
                        Senses.map(item=>{
                            return(
                               <div>
                                   <p>{item.definitions[0]}</p><br/>
                                   {item.examples?<li style={{paddingLeft:'8px',marginTop:'6px'}}>{item.examples[0].text}</li>:null}<br/>
                                   {item.shortDefinitions?<p>{item.shortDefinitions[0]}</p>:null}<br/>
                                   {
                                       item.subsenses?item.subsenses.map(items=>{
                                           return(
                                               <div>
                                                   {items.definitions[0]}<br/>
                                                   <li style={{paddingLeft:'8px',marginTop:'6px'}}>{items.examples[0].text}</li><br/>
                                                   {items.shortDefinitions[0]}<br/>
                                               </div>
                                           )
                                       })
                                       :null
                                   }
                               </div>
                            )
                        })
                    }
                    </div>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default Search
