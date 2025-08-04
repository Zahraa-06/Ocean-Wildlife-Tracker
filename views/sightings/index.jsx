//
const React = require('react')

function Index (props){
    const sightings = props.sightings
    return (
        <div>
        <h1>Index page</h1>
        <a href={`/sightings/new?token=${props.token}`}>Create A New Sighting</a><br/>
        <a href={`/species/new?token=${props.token}`}>Create A New Species</a><br/>
        <a href={`/species/?token=${props.token}`}>Index Species Page</a>
        <ul>
        {
            sightings.map((sighting) => {
                return (<li>this is the <a href={`/sightings/${sighting.id}?token=${props.token}`}>{sighting.species.name}</a>
                and its location is {sighting.location}. The time stamp is {sighting.timestamp}. This is the photo URL {sighting.photoUrl}.
                This is reported by {sighting.reportedBy.name}. Some notes are {sighting.notes}.</li>)
            })
        }
        </ul>
        </div>
    )
}

module.exports = Index