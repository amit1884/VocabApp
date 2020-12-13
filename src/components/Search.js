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
    const [Data,setData]=useState([])
    const searchHandler=(e)=>{
        setText(e.target.value)
        console.log(Text)
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
                {Text}
                </div>
            </div>
        </div>
    )
}

export default Search
