import { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const NavigationBar = () => {
    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleLogOut = () => {
        logOut()
        .then(() => {
            navigate('/category/0')
        })
        .catch(error => {
            console.log(error);
        })
    }
    return (
        <Container>
            <Navbar collapseOnSelect expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
                <Link
                  className=" text-decoration-none text-secondary mx-2"
                  to="/category/0"
                >
                  Home
                </Link>
                <Link
                  className=" text-decoration-none text-secondary mx-2"
                  to="/about"
                >
                  About
                </Link>
                <Link
                  className=" text-decoration-none text-secondary mx-2"
                  to="/career"
                >
                  Career
                </Link>
            </Nav>
            <Nav className="d-flex align-items-center">
              {user && (
                <Nav.Link href="#deets">
                  <FaUserCircle style={{ fontSize: "2rem" }}></FaUserCircle>
                </Nav.Link>
              )}
                {user ? (
                  <Button onClick={handleLogOut} variant="secondary">Logout</Button>
                ) : (
                  <Link to='/login' className="btn btn-secondary mx-2" variant="secondary">Login</Link>
                )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
        </Container>
    );
};

export default NavigationBar;