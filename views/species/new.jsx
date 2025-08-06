const React = require('react')
const Layout = require('../layout/layout')

function New(props) {
    return (
        <Layout token={props.token}>
            <div>
                <h1>New Species</h1>
                <form action={`/species?token=${props.token}`} method="POST">
                    Name: <input type="text" name="name" /><br />
                    Scientific Name: <input type="text" name="scientificName" /><br />
                    Conservation Status: <input type="text" name="conservationStatus" /><br />
                    Description: <input type="text" name="description" /><br />
                    Habitat: <input type="text" name="habitat" /><br />
                    Image URL: <input type="text" name="imageUrl" /><br />
                    <input type="submit" value="Create Species" />
                </form>
            </div>
        </Layout>
    )
}

module.exports = New