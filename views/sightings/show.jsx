const React = require('react')
const Layout = require('../layout/layout')

function Show(props){
    return(
        <Layout sighting={props.sighting}>
            <div>
                <h1>{props.sighting.species.name}</h1>
                <a href={`/sightings/?token=${props.token}`}>Go back to Index Page</a>
                <p>
                    The {props.sighting.species.name}, its location is {props.sighting.location}, the time stamp is {props.sighting.timestamp}.
                    The photo url is {props.sighting.photoUrl}, its reported by {props.sighting.reportedBy.name}. Some notes are {props.sighting.notes}
                    and {props.sighting.verified? 'It is verified': 'It is not verified'}
                </p>
                <form action={`/sightings/${props.sighting._id}?_method=DELETE&token=${props.token}`} method="POST">
                    <input type="submit" value={`Delete this ${props.sighting.species.name}`}/>
                </form>
                <div>
                <a href={`/sightings/${props.sighting._id}/edit?token=${props.token}`}><button>{`Edit this ${props.sighting.species.name}`}</button></a>
                </div>
            </div>
        </Layout>
    )
}

module.exports = Show