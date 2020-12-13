export const ApiDetails={
    app_id : "5c4cb6ce",
    app_key : "eda438bdd760731c0054b187c7aafa97",
    language : "en-gb",
    word_id : "example",
}

export const BaseURL='https://od-api.oxforddictionaries.com/api/v2/entries'


{/* <h3>{Text}</h3>
{
 Senses.map(item=>{
     return(
        <div>
            <p>{item.definitions[0]}</p><br/>
            {item.examples?<li>{item.examples[0].text}</li>:null}<br/>
            {item.shortDefinitions?<p>{item.shortDefinitions[0]}</p>:null}<br/>
            {
                item.subsenses?item.subsenses.map(items=>{
                    return(
                        <div>
                            {items.definitions[0]}<br/>
                            <li>{items.examples[0].text}</li><br/>
                            {items.shortDefinitions[0]}<br/>
                        </div>
                    )
                })
                :null
            }
        </div>
     )
 })
} */}