const React = require('react')

function Index (props){
    const species = props.species
    return (
        <div>
        <h1>Index page</h1>
        <a href={`/sightings/?token=${props.token}`}>Sightings Index Page</a><br/>
        <a href={`/species/new?token=${props.token}`}>Create A New Species</a><br/>
        <a href={`/sightings/new?token=${props.token}`}>Create A New Sighting</a><br/>
        <ul>
        {
            species.map((species) => {
                return (<li>this is <a href={`/species/${species.id}?token=${props.token}`}>{species.name}</a>with the scientific name of 
                {species.scientificName}, its conservation status is {species.conservationStatus}. The description is {species.description}.
                The {species.name}'s habitat is {species.habitat} and this is its image url {species.imageUrl}.</li>)
            })
        }
        </ul>
        </div>
    )
}

module.exports = Index