const React = require('react')

function Nav(props){
 return(
   <nav>
    {
        props.token ?
        <>
    <a href={`/sightings/new?token=${props.token}`}>Create A New Sighting</a><br/>
    <a href={`/species/new?token=${props.token}`}>Create A New Species</a><br/>
    <a href={`/sightings/?token=${props.token}`}>Index Sightings Page</a><br/>
    <a href={`/species/?token=${props.token}`}>Index Species Page</a><br/>
    <a href="/users">Log Out</a>
    </>
    :
    <>
    <a href="/users/login">Log In</a>
    <a href="/users">Sign Up</a>
    </>
    }
   </nav>
 )
}

module.exports = Nav