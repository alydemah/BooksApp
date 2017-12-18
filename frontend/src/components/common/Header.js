import React from 'react';
import { Link, IndexLink} from 'react-router';

const Header = () => {
    return (
        <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <IndexLink to="/" activeClassName="active">Home</IndexLink>
              {" | "}
              <Link to="/movies" activeClassName="active">Movies</Link>
               {" | "}
               <Link to="/about" activeClassName="active">About</Link>
           </div>

          <div className="collapse navbar-collapse">
          <ul className="navbar-nav navbar-right">
          <Link to="/Login" activeClassName="active">About</Link>
          </ul>
          </div>


        </div>
      </nav>
    );

};



export default Header;

