import React ,{useState}from 'react'
import {Link} from 'react-router-dom'
import Modal from '@material-ui/core/Modal'
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import axios from 'axios'
import Add from './Add';
function Search() {
    const ApiDetails={
        app_id : "5c4cb6ce",
        app_key : "eda438bdd760731c0054b187c7aafa97",
        language : "en-gb",
        word_id : "example",
    }
    const [Text,setText]=useState(undefined)
    const [open,setOpen]=useState(false)
    const [Data,setData]=useState([])
    const [ModalData,setModalData]=useState({})
    const searchHandler=(e)=>{
        setText(e.target.value)
        console.log(Text)
        axios.get('http://localhost:5000/search',{params:{
            text:Text
        }})
        .then(res=>{
            console.log(res.data.words)
            setData(res.data.words)
        })
        .catch(err=>console.log(err))
    }

    const handleOpen=(item)=>{
        setModalData(item)
        setOpen(true)
    }
    const handleClose=()=>{
        setOpen(false)
    }
  
    return (
        <div>
            <div className="header_wrapper">
                <form>
                    <input 
                    type="text" 
                    placeholder="Search ..."
                    onChange={searchHandler}
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
                    Data?Data.map(item=>{
                        return(
                            <div className="single_list_item" onClick={()=>handleOpen(item)}>
                                <p style={{fontSize:'22px',fonWeight:'550'}}>{item.id}</p>
                                <p>({item.category})&nbsp;{item.origin[0]}</p>
                            </div>
                        )
                    }):null
                }
                {Data.length===0?
                <Link to ="/"><p style={{textAlign:'center',color:'#000'}}>If word not found,<br/>please add it from here</p></Link>:null}
                </div>
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-model-title"
                aria-describedby="simple-modal-description"
            >
                <div className="modal_card">
                    <IconButton aria-label="close" style={{color:"#000",float:'right',marginRight:'20px'}} onClick={handleClose} >
                    <CloseIcon />
                    </IconButton>
                    <div className="modal_content">
                    <p id="simple-model-title">{ModalData.id}</p>
                    <hr/>
                    <div id ="simple-modal-description">
                        <p style={{padding:'6px',marginBottom:'1px',color:'gray'}}><i>{ModalData.category}</i></p>
                        <p style={{padding:'6px',marginBottom:'1px',color:'gray',lineHeight:'1.3'}}>{ModalData.origin}</p>
                        {
                            ModalData.senses?ModalData.senses.map(subitems=>{
                                return(
                                    <div style={{padding:'7px'}}>
                                        <p style={{padding:'1px',marginBottom:'5px'}}>{subitems.definitions}</p>
                                        {subitems.examples.length>0?<li style={{padding:'6px',marginBottom:'5px'}}>{subitems.examples[0].text}</li>:null}
                                        {subitems.shortDefinitions? <p style={{padding:'1px',marginBottom:'5px'}}>{subitems.definitions}</p>:null}
                                        {
                                            subitems.subsenses.length>0?subitems.subsenses.map(data=>{
                                                return(
                                                    <div>
                                                        <p style={{padding:'1px',marginBottom:'5px'}}>{data.definitions}</p>
                                                        {data.examples.length>0?<li style={{padding:'6px',marginBottom:'5px'}}>{subitems.examples[0].text}</li>:null}
                                                        {data.shortDefinitions? <p style={{padding:'1px',marginBottom:'5px'}}>{subitems.definitions}</p>:null}
                                                    </div>
                                                )
                                            }):null
                                        }
                                    </div>
                                )
                            })
                            :null
                            
                        }
                    </div>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default Search
