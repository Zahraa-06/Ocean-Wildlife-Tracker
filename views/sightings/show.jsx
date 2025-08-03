const React = require('react')

const styles = {
    backgroundColor: 'lightblue'
}

function Show(props){
    return(
        <div style={styles}>
            <h1>{props.sighting.species}</h1>
            <a href={`/sightings/?token=${props.token}`}>Go back to Index Page</a>
            <p>
                The {props.sighting.species}, its location is {props.sighting.location}, the time stamp is {props.sighting.timestamp}.
                The photo url is {props.sighting.photoUrl}, its reported by {props.sighting.reportedBy}. Some notes are {props.sighting.notes}
                and {props.sighting.verified? 'It is verified': 'It is not verified'}
            </p>
              <form action={`/sighting/${props.sighting._id}?_method=DELETE&token=${props.token}`} method="POST">
                <input type="submit" value={`Delete this ${props.sighting.species}`}/>
            </form>
            <div>
            <a href={`/sighting/${props.sighting._id}/edit?token=${props.token}`}><button>{`Edit this ${props.sighting.species}`}</button></a>
            </div>
        </div>
    )
}

module.exports = Show