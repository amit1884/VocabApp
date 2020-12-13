import React,{useState} from 'react'
import Modal from '@material-ui/core/Modal'
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
function WordList() {

    const [open,setOpen]=useState(false)
    const handleOpen=()=>{
        setOpen(true)
    }
    const handleClose=()=>{
        setOpen(false)
    }
    const WordList=[
        {   id:1,   
            word:'piecemeal',
            meaning1:'(adjective) characterized by unsystematic partial measure taj=ken over a period of time',
            meaning2:'(adverb) in an unsystematic way'
        },
        {   id:2,
            word:'piecemeal',
            meaning1:'(adjective) characterized by unsystematic partial measure taj=ken over a period of time',
            meaning2:'(adverb) in an unsystematic way'
        },
        {   id:3,
            word:'piecemeal',
            meaning1:'(adjective) characterized by unsystematic partial measure taj=ken over a period of time',
            meaning2:'(adverb) in an unsystematic way'
        },
        {   id:4,
            word:'piecemeal',
            meaning1:'(adjective) characterized by unsystematic partial measure taj=ken over a period of time',
            meaning2:'(adverb) in an unsystematic way'
        },
        {
            word:'piecemeal',
            meaning1:'(adjective) characterized by unsystematic partial measure taj=ken over a period of time',
            meaning2:'(adverb) in an unsystematic way'
        },
        {
            word:'piecemeal',
            meaning1:'(adjective) characterized by unsystematic partial measure taj=ken over a period of time',
            meaning2:'(adverb) in an unsystematic way'
        },
        {
            word:'piecemeal',
            meaning1:'(adjective) characterized by unsystematic partial measure taj=ken over a period of time',
            meaning2:'(adverb) in an unsystematic way'
        },
    ]
    return (
        <div className="list_container">
            {WordList.map(item=>{
                return(
                    <div className="single_list_item" onClick={handleOpen} key={item.id}>
                    <h3 style={{margin:'10px'}}>{item.word}</h3>
                    <p>{item.meaning1}</p>
                    <p>{item.meaning2}</p>
                    </div>
                )
            })}
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
                    <p id="simple-model-title">rhetorical</p>
                    <hr/>
                    <div id ="simple-modal-description">
                        Meaning of the word
                    </div>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default WordList
