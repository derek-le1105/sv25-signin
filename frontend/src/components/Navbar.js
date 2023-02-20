import { Link } from "react-router-dom";

import Image from "react-bootstrap/Image";

const Navbar = () => {
  const handleClick = () => {};

  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>Student Login</h1>
          {/* <Image
            src="https://pasadena.edu/academics/support/success-centers/stem-centers/images/success-center_STEM.png"
            rounded
            fluid
            className="mb-3"
          /> */}
        </Link>
        <nav>
          <div>
            <button onClick={handleClick}>Logout</button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
