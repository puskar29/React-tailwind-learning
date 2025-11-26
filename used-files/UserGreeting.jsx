import PropTypes from 'prop-types'

function UserGreeting(props) {
  // Treat null or undefined as missing and fall back to a visible default
  const username = props.username ?? UserGreeting.defaultProps.username
  const isLoggedIn = props.isLoggedIn ?? UserGreeting.defaultProps.isLoggedIn

  const welcomeMessage = <h2 className="welcome-message">Welcome {username}</h2>
  const loginMessage = <h2 className="login-prompt">Please Login to continue</h2>
  return (isLoggedIn ? welcomeMessage : loginMessage)
}

UserGreeting.propTypes = {
  isLoggedIn: PropTypes.bool,
  username: PropTypes.string
}

UserGreeting.defaultProps = {
  isLoggedIn: false,
  username: "Guest"
}

export default UserGreeting
