import React from 'react'
import {Link} from 'react-router-dom'
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
function Header({content,search}) {
    return (
        <div>
            <div className="header_wrapper">
                <h2>{content}</h2>
                {search?
                <div style={{position:'absolute',right:'10%'}}>
                    <Link to ="/search">
                    <IconButton aria-label="search" style={{color:"#fff"}} >
                    <SearchIcon />
                    </IconButton>
                    </Link>
                </div>
                :null}
            </div>
        </div>
    )
}

export default Header
