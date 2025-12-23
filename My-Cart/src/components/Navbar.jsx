import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand btn btn-warning" href="#">My Cart</a>
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav" 
            aria-controls="navbarNav" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link btn btn-primary" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link btn btn-light text-dark" href="#">Sign-up</a>
              </li>
              <li className="nav-item">
                <a className="nav-link btn btn-info" href="#">Login</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  );
};

export default Navbar;
