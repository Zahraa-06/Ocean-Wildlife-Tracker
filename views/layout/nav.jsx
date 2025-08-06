const React = require('react')

function Nav(props) {
  return (
    <nav className="headerNav">
      {props.token ? (
        <>
          <a className="click" href={`/sightings/all/?token=${props.token}`}>Sightings Main</a>
          <a className="click" href={`/sightings/?token=${props.token}`}>My Sightings</a>
          <a className="click" href={`/species/?token=${props.token}`}>Species Main</a>
          <a className="click" href={`/sightings/new?token=${props.token}`}>New Sighting</a>
          <a className="click" href={`/species/new?token=${props.token}`}>New Species</a>
          <form action="/users/logout" method="POST" className="logout-form">
            <input type="submit" className="logout-btn" value="Log Out" />
          </form>
        </>
      ) : (
        <>
          <a className="click" href="/users">Sign Up</a>
          <a className="click" href="/users/login">Log In</a>
        </>
      )}
    </nav>
  )
}

module.exports = Nav
