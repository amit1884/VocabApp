import React ,{useState}from 'react'
import axios from 'axios'
import Header from './Header'
import WordList from './WordList'
import Add from './Add'
const Url='https://od-api.oxforddictionaries.com/api/v2/entries/en-gb/'
// const fullUrl='https://od-api.oxforddictionaries.com/api/v2/entries/en-gb/ace?fields=definitions&strictMatch=false'
const ApiDetails={
    app_id : "5c4cb6ce",
    app_key : "eda438bdd760731c0054b187c7aafa97",
    language : "en-gb",
    word_id : "example",
}
function Home() {
    const [data,setData]=useState([])
    const SubmitHandler=(e)=>{
        e.preventDefault();
        axios.get('/example?fields=definitions&strictMatch=false',{
            headers:{
                'app_id': ApiDetails.app_id,
                'app_key': ApiDetails.app_key
            }
        })
        .then(result=>{
            console.log('result  ',result)
            setData(result.data)
           
        })
        .catch(err=>console.log(err))
    }
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
