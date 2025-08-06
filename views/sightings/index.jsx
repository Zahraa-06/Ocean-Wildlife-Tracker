const React = require('react')
const Layout = require('../layout/layout')

function Index(props) {
    const sightings = props.sightings
    return (

        <Layout token={props.token}>
            <div>
                {props.mySightings ? <h1>My Sightings</h1> : <h1>All Sightings</h1>}
                <ul>
                    {
                        sightings.map((sighting) => {
                            return (<li>
                                • The species is <a href={`/sightings/${sighting.id}?token=${props.token}`}>{sighting.species.name}</a>.<br />
                                • Located in {sighting.location}.<br />
                                • Recorded at {sighting.createdAt.toString()}.<br />
                                • Click here to see the photo {sighting.photoUrl}.<br />
                                • This was reported by {sighting.reportedBy.name}.<br />
                                • A note: {sighting.notes}.<br /></li>)
                        })
                    }
                </ul>
            </div>
        </Layout>
    )
}

module.exports = Index