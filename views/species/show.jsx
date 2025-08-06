const React = require('react')
const Layout = require('../layout/layout')

function Show(props) {
    return (
        <Layout species={props.species} token={props.token}>
            <div>
                <h1>{props.species.name}</h1>
                <p>
                    • The species' name is {props.species.name}.<br />
                    • The scientific name is {props.species.scientificName}.<br />
                    • The conservation status is {props.species.conservationStatus}.<br />
                    • A description of the species: {props.species.description}.<br />
                    • Its habitat's is {props.species.habitat}.<br />
                    • An image of the species: {props.species.imageUrl}.<br />
                </p>
                <div className='btn'>
                    <a href={`/species/${props.species._id}/edit?token=${props.token}`}><button>{`Edit this ${props.species.name}`}</button></a>
                    <form action={`/species/${props.species._id}?_method=DELETE&token=${props.token}`} method="POST">
                        <input type="submit" value={`Delete this ${props.species.name}`} />
                    </form>
                </div>
                <div>
                </div>
            </div>
        </Layout>
    )
}

module.exports = Show