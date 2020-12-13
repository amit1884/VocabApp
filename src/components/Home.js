import React ,{useState}from 'react'
import axios from 'axios'
import Header from './Header'
import WordList from './WordList'
import Add from './Add'
const Url='https://od-api.oxforddictionaries.com/api/v2/entries/en-gb/'
function Home() {
    return (
        <div>
           <Header content="Vocab" search={true}/>
            <div className="main_container">
            <div className="home_main_wrapper">
                <h3 style={{padding:'6px'}}>Word List</h3>
                <hr/>
                <WordList/>
            </div>
            </div>
            <Add/>
        </div>
    )
}

export default Home
