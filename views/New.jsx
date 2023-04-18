const React = require('react');


function New(){
    return(
        <div>
            <nav>
                <a href='/pokemon'>View Pokemon</a>
            </nav>
            <h1>New Pokemon</h1>
            <form action='/pokemon' method='POST'>
                Name:<input type='text' name='Name'/>
                <br />
                PokePic: <input type='text' name='PokePic'/>
                <br />
                <input type='submit' value='Save Pokemon?'/>
            </form>
        </div>
    )
}

module.exports = New;