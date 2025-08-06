const React = require('react')
const Layout = require('../layout/layout')

function New(props) {
    return (
        <Layout token={props.token}>
            <div>
                <h1>New Sighting</h1>
                <form action={`/sightings?token=${props.token}`} method="POST">

                    <label for="species-select">Choose a species:</label>
                    <select name="species" id="species-select">
                        <option value="">--Please choose an option--</option>
                        {
                            props.species.map((sp) => {
                                return (<option value={sp._id}>{sp.name}</option>)
                            })
                        }
                    </select>
                    <br />
                    Location: <input type="text" name="location" /><br />
                    Photo URL: <input type="text" name="photoUrl" /><br />
                    Notes: <input type="text" name="notes" /><br />
                    Verified: <input type="checkbox" name="verified" /><br />
                    <input type="submit" value="Create Sighting" />
                </form>
            </div>
        </Layout>
    )
}

module.exports = New