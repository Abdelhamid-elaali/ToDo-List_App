/*import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../redux/authActions';

const mapStateToProps = (state) => ({
  isAuthenticated: state.isAuthenticated,
});

const Navbar = ({ isAuthenticated, logout }) => {
  return (
    <nav>
      <h2>Navbar</h2>
      <span>
        {isAuthenticated ? (
          <button onClick={logout}>Logout</button>
        ) : (
          <span>Login</span>
        )}
      </span>
    </nav>
  );
};

export default connect(mapStateToProps, { logout })(Navbar);*/


