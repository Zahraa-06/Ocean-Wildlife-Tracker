const React = require('react')
const Layout2 = require('../layout/noAuthLayout')

function SignUp(props) {
    return (
        <Layout2>
            <div>
                <h1>Sign Up</h1>
                <form action="/users" method="POST">
                    Name: <input type="text" name="name" /><br />
                    Email: <input type="email" name="email" /><br />
                    Password: <input type="password" name="password" /><br />
                    <input type="submit" value="Submit to Register" />
                </form>
            </div>
        </Layout2>
    )
}

module.exports = SignUp