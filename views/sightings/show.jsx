const React = require('react')

const styles = {
    backgroundColor: 'lightblue'
}

function Show(props){
    return(
        <div style={styles}>
            <h1>{props.sighting.name}</h1>
            <a href={`/sightings/?token=${props.token}`}>Go back to Index Page</a>
            <p>
                The {props.sighting.name} is {props.sighting.color} and 
                {props.sighting.readyToEat? 'It is ready to eat': 'It is not ready to eat'}
            </p>
              <form action={`/sighting/${props.sighting._id}?_method=DELETE&token=${props.token}`} method="POST">
                <input type="submit" value={`Delete this ${props.sighting.name}`}/>
            </form>
            <div>
            <a href={`/sighting/${props.sighting._id}/edit?token=${props.token}`}><button>{`Edit this ${props.sighting.name}`}</button></a>
            </div>
        </div>
    )
}

module.exports = Show