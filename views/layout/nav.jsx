const React = require('react')

function Nav(props){
 return(
   <nav className='headerNav'>
    {
        props.token ?
        <>
    <a href={`/sightings/all/?token=${props.token}`}>All Sightings</a>
    <a href={`/sightings/?token=${props.token}`}>My Sightings</a>
    <a href={`/species/?token=${props.token}`}>Index Species Page</a>
    <a href={`/sightings/new?token=${props.token}`}>Create A New Sighting</a>
    <a href={`/species/new?token=${props.token}`}>Create A New Species</a>
    <form action={`/users/logout`} method="POST">
    <input type="submit" defaultValue='Log Out'/>
    </form>
    </>
    :
    <>
    <a href="/users">Sign Up</a>
    <a href="/users/login">Log In</a>
    </>
    }
   </nav>
 )
}

module.exports = Nav