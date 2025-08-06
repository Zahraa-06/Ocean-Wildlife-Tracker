const React = require('react')
const Layout2 = require('../layout/noAuthLayout')

function SignIn(props) {
    return (
        <Layout2>
            <div>
                <h1>Log In</h1>
                <form action="/users/login" method="POST">
                    Email: <input type="email" name="email" /><br />
                    Password: <input type="password" name="password" /><br />
                    <input type="submit" value="Submit to Register" />
                </form>
            </div>
        </Layout2>
    )
}

module.exports = SignIn