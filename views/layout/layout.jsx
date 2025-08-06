const React = require('react')
const Nav = require('./nav')

function Layout(props){
 return(
    <html>
        <head>
            <Nav token={props.token}/>
            <title>{!props.species?.name ? 'Ocean Wildlife Tracker' : `${props.species.name} - Ocean Wildlife Tracker`}</title>
            <link rel="stylesheet" href="/style.css" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </head>
        <body>
            <div className="container">
                {props.children}
            </div>
        </body>
    </html>
 )
}

module.exports = Layout