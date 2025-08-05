const React = require('react')
const Layout = require('../layout/layout')

function Index (props){
    const sightings = props.sightings
    console.log(sightings)
    return (
         <Layout token={props.token}>
            <div>
                <h1>Index page</h1> 
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
        </Layout>
    )
}

module.exports = Index