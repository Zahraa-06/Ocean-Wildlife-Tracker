const React = require('react')

function New (props) {
    return(
        <div>
            <h1>New Species Page</h1>
            <a href={`/species?token=${props.token}`}>Go back to Species Index Page</a><br/>
            <a href={`/sightings?token=${props.token}`}>Go back to Sightings Index Page</a><br/>
            <form action={`/species?token=${props.token}`} method="POST">
                Name: <input type="text" name="name" /><br/>
                Scientific Name: <input type="text" name="scientificName" /><br/>
                Conservation Status: <input type="text" name="conservationStatus" /><br/>
                Description: <input type="text" name="description" /><br/>
                Habitat: <input type="text" name="habitat" /><br/>
                Image URL: <input type="text" name="imageUrl" /><br/>
                <input type="submit" value="Create Species" />
            </form>
        </div>
    )
}

module.exports = New