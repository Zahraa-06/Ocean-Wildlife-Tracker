const React = require('react')
const Layout = require('../layout/layout')

function Index(props) {
    const species = props.species
    return (
        <Layout token={props.token}>
            <div>
                <h1>All Species</h1>
                <ul>
                    {
                        species.map((species) => {
                            return (<li>
                                • The species' name is <a href={`/species/${species.id}?token=${props.token}`}>{species.name}</a>.<br />
                                • The scientific name is {species.scientificName}.<br />
                                • The conservation status is {species.conservationStatus}.<br />
                                • A description of the species: {species.description}.<br />
                                • Its habitat's is {species.habitat}.<br />
                                • An image of the species: {species.imageUrl}.<br />
                                </li>)
                        })
                    }
                </ul>
            </div>
        </Layout>
    )
}

module.exports = Index