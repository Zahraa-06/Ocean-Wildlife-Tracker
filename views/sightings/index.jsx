//
const React = require('react')

function Index (props){
    const sightings = props.sightings
    return (
        <div>
        <h1>Index page</h1>
        <a href={`/sightings/new?token=${props.token}`}>Create A New Sighting</a>
        <ul>
        {
            sightings.map((sighting) => {
                return (<li>this is the <a href={`/sightings/${sighting.id}?token=${props.token}`}>{sighting.name}</a>of the color {sighting.color}</li>)
            })
        }
        </ul>
        </div>
    )
}

module.exports = Index