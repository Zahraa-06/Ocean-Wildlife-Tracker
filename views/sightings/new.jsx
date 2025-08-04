const React = require('react')

function New (props) {
    return(
        <div>
            <h1>New Sighting Page</h1>
            <a href={`/sightings?token=${props.token}`}>Go back to Sightings Index Page</a><br/>
            <a href={`/species?token=${props.token}`}>Go back to Species Index Page</a><br/>
            <form action={`/sightings?token=${props.token}`} method="POST">
               
                <label for="species-select">Choose a species:</label>
                <select name="species" id="species-select">
                <option value="">--Please choose an option--</option>
                {
                    props.species.map((sp)=>{
                        return(<option value={sp._id}>{sp.name}</option>)
                    })
                 }
                 </select>
                <br/>
                Location: <input type="text" name="location" /><br/>
                Photo URL: <input type="text" name="photoUrl" /><br/>
                Notes: <input type="text" name="notes" /><br/>
                Verified: <input type="checkbox" name="verified" /><br/>
                <input type="submit" value="Create Sighting" />
            </form>
            {/* <a href={`/sightings?token=${props.token}`}>Go back to Index Page</a> */}
        </div>
    )
}

module.exports = New