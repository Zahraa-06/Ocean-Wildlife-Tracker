const React = require('react')

function Edit (props) {
    const { species, _id, location, timestamp, photoUrl, reportedBy, notes, verified } = props.sighting
    return(
        <div>
            <h1>{species} Edit Page</h1>
            <a href='/sightings'>Go back to Index Page</a>
            <form action={`/sightings/${_id}?_method=PUT&token=${props.token}`} method="POST">
                {/* Species: <input type="text" name="species" defaultValue={species} /><br/> */}
                Location: <input type="text" name="location" defaultValue={location} /><br/>
                {/* Time Stamp: <input type="text" name="location" defaultValue={location} /><br/> */}
                Photo URL: <input type="text" name="photoUrl" defaultValue={photoUrl} /><br/>
                {/* Reported By: <input type="text" name="reportedBy" defaultValue={reportedBy} /><br/> */}
                Notes: <input type="text" name="notes" defaultValue={notes}/><br/>
                Verified: {verified? <input type="checkbox" name="verified" defaultChecked />: <input type='checkbox' name="verified"/>}<br/>
                <input type="submit" value="Update Sighting" />
            </form>
        </div>
    )
}

module.exports = Edit