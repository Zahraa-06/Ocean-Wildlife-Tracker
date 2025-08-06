const React = require('react')
const Layout = require('../layout/layout')

function Show(props){
    return(
        <Layout species={props.species} token={props.token}>
            <div>
                <h1>{props.species.name}</h1>
                {/* <a href={`/species/?token=${props.token}`}>Go back to Index Page</a> */}
                <p>
                    The {props.species.name}'s scientific name is {props.species.scientificName} and its 
                    conservation status is {props.species.conservationStatus}. This is the {props.species.name}'s 
                    description {props.species.description}. Its habitat is {props.species.habitat} and this is its image URL 
                    {props.species.imageUrl}
                </p>
                <div className='btn'>
                <a href={`/species/${props.species._id}/edit?token=${props.token}`}><button>{`Edit this ${props.species.name}`}</button></a>
                <form action={`/species/${props.species._id}?_method=DELETE&token=${props.token}`} method="POST">
                    <input type="submit" value={`Delete this ${props.species.name}`}/>
                </form>
                </div>
                <div>
                </div>
            </div>
        </Layout>
    )
}

module.exports = Show