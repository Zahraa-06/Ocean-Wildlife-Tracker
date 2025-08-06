const React = require('react')
const Layout = require('../layout/layout')

function Show(props) {
    return (
        <Layout sighting={props.sighting} token={props.token}>
            <div>
                <h1>{props.sighting.species.name}</h1>
                <p>
                    • The species is {props.sighting.species.name}.<br />
                    • Located in {props.sighting.location}.<br />
                    • Recorded at {props.sighting.createdAt.toString()}.<br />
                    • Click here to see the photo {props.sighting.photoUrl}.<br />
                    • This was reported by {props.sighting.reportedBy.name}.<br />
                    • A note: {props.sighting.notes}.<br />
                    • The sighting is {props.sighting.verified ? 'verified' : 'not verified'}.<br />
                </p>
                <div className='btn'>
                    <a href={`/sightings/${props.sighting._id}/edit?token=${props.token}`}><button>{`Edit this ${props.sighting.species.name}`}</button></a>
                    <form className='delete-btn' action={`/sightings/${props.sighting._id}?_method=DELETE&token=${props.token}`} method="POST">
                        <input type="submit" value={`Delete this ${props.sighting.species.name}`} />
                    </form>
                </div>
            </div>
        </Layout>
    )
}

module.exports = Show