import React,{useState,useEffect} from 'react'
import Modal from '@material-ui/core/Modal'
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import axios from 'axios'
function WordList() {

    const [open,setOpen]=useState(false)
    const [Data,setData]=useState([])
    const [ModalData,setModalData]=useState({})
    const handleOpen=(item)=>{
        setModalData(item)
        setOpen(true)
    }
    const handleClose=()=>{
        setOpen(false)
    }
    useEffect(()=>{

        axios.get('https://vocabapi.herokuapp.com/getwords')
        .then(res=>{
            // console.log(res.data)
            setData(res.data)
        })
        .catch(err=>console.log(err))
    },[Data])

    return (
        <div className="list_container">
           {
               Data.map(item=>{
                   return(
                       <div className="single_list_item" onClick={()=>handleOpen(item)}>
                           <p style={{fontSize:'22px',fonWeight:'550'}}>{item.id}</p>
                           <p>({item.category})&nbsp;{item.origin[0]}</p>
                       </div>
                   )
               })
           }
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

export default WordList
