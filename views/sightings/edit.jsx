const React = require('react')
const Layout = require('../layout/layout')

function Edit(props) {
    const { species, _id, location, photoUrl, notes, verified } = props.sighting
    return (
        <Layout sightings={props.sighting} token={props.token}>
            <div>
                <h1>Edit Sighting of {species.name}</h1>
                <form action={`/sightings/${_id}?_method=PUT&token=${props.token}`} method="POST">
                    <label for="species-select">Choose a species:</label>
                    <select name="species" id="species-select">
                        <option value={species._id}>Previous {species.name}</option>
                        {
                            props.species.map((sp) => {
                                return (<option value={sp._id}>{sp.name}</option>)
                            })
                        }
                    </select>
                    <br />
                    Location: <input type="text" name="location" defaultValue={location} /><br />
                    Photo URL: <input type="text" name="photoUrl" defaultValue={photoUrl} /><br />
                    Notes: <input type="text" name="notes" defaultValue={notes} /><br />
                    Verified: {verified ? <input type="checkbox" name="verified" defaultChecked /> : <input type='checkbox' name="verified" />}<br />
                    <input type="submit" value="Update Sighting" />
                </form>
                <div>{props.user.name} reported this sighting</div>
            </div>
        </Layout>
    )
}

module.exports = Edit