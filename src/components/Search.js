import React from 'react'
import {Link} from 'react-router-dom'
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
function Search() {
    return (
        <div>
            <div className="header_wrapper">
                <form>
                    <input type="text" placeholder="Search ..."style={{width:'70vw',padding:'10px',background:'transparent',border:'none',color:'#fff',borderBottom:'2px solid gray',outline:'none'}}/>
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

                </div>
            </div>
        </div>
    )
}

export default Search
