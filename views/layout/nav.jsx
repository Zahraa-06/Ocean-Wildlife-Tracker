const React = require('react')

function Nav(props){
 return(
   <nav className='headerNav'>
    {
        props.token ?
        <>
    <a className='click' href={`/sightings/all/?token=${props.token}`}>All Sightings</a>
    <a className='click' href={`/sightings/?token=${props.token}`}>My Sightings</a>
    <a className='click' href={`/species/?token=${props.token}`}>Index Species Page</a>
    <a className='click' href={`/sightings/new?token=${props.token}`}>Create A New Sighting</a>
    <a className='click' href={`/species/new?token=${props.token}`}>Create A New Species</a>
    <form action={`/users/logout`} method="POST">
    <input type="submit" defaultValue='Log Out'/>
    </form>
    </>
    :
    <>
    <a className='click' href="/users">Sign Up</a>
    <a className='click' href="/users/login">Log In</a>
    </>
    }
   </nav>
 )
}

module.exports = Nav