import { Button, ListGroup } from "react-bootstrap";
import {
  FaGithub,
  FaGoogle,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import QZone from "../QZone/QZone";
import bg from "../../../assets/bg.png";

const RightNav = () => {
  return (
    <div className="w-100">
      <h4>Login With</h4>
      <Button variant="outline-primary mb-2 w-100">
        <FaGoogle />
        Login with Google
      </Button>
      <Button variant="outline-secondary w-100">
        <FaGithub />
        Login with Github
      </Button>
      <div className="mt-4">
        <h4>Find Us On</h4>
        <ListGroup>
          <ListGroup.Item>
            <FaFacebook /> Facebook
          </ListGroup.Item>
          <ListGroup.Item>
            <FaTwitter /> Twitter
          </ListGroup.Item>
          <ListGroup.Item>
            <FaInstagram /> Instagram
          </ListGroup.Item>
        </ListGroup>
      </div>
      <QZone></QZone>
      <div
        className="text-center p-5 text-white"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      >
        <h2 className="display-6 fw-bolder">Create an Amazing Newspaper</h2>
        <p className="fs-5 mt-4">Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
        <button className="btn btn-danger px-4 py-2 mt-2">Learn More</button>
      </div>
    </div>
  );
};

export default RightNav;
