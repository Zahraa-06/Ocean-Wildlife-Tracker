const React = require('react')

const styles = {
    backgroundColor: 'lightblue'
}

function Show(props){
    return(
        <div style={styles}>
            <h1>{props.fruit.name}</h1>
            <a href={`/fruits/?token=${props.token}`}>Go back to Index Page</a>
            <p>
                The {props.fruit.name} is {props.fruit.color} and 
                {props.fruit.readyToEat? 'It is ready to eat': 'It is not ready to eat'}
            </p>
              <form action={`/fruits/${props.fruit._id}?_method=DELETE&token=${props.token}`} method="POST">
                <input type="submit" value={`Delete this ${props.fruit.name}`}/>
            </form>
            <div>
            <a href={`/fruits/${props.fruit._id}/edit?token=${props.token}`}><button>{`Edit this ${props.fruit.name}`}</button></a>
            </div>
        </div>
    )
}

module.exports = Show