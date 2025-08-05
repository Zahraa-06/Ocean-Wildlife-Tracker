const React = require('react')
const Layout = require('../layout/layout')

function Edit (props) {
    const { name, _id, scientificName, conservationStatus, description, habitat, imageUrl} = props.species
    return(
        <Layout species={props.species}>
            <div>
                <h1>{name} Edit Page</h1>
                <a href='/species'>Go back to Index Page</a>
                <form action={`/species/${_id}?_method=PUT&token=${props.token}`} method="POST">
                    Name: <input type="text" name="name" defaultValue={name} /><br/>
                    Scientific Name: <input type="text" name="scientificName" defaultValue={scientificName} /><br/>
                    Conservation Status: <input type="text" name="conservationStatus" defaultValue={conservationStatus} /><br/>
                    Description: <input type="text" name="description" defaultValue={description} /><br/>
                    Habitat: <input type="text" name="habitat" defaultValue={habitat} /><br/>
                    Image URL: <input type="text" name="imageUrl" defaultValue={imageUrl} /><br/>
                    <input type="submit" value="Update Species" />
                </form>
            </div>
        </Layout>
    )
}

module.exports = Edit