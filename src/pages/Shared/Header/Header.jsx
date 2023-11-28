import moment from "moment/moment";
import Marquee from "react-fast-marquee";
import logo from "../../../assets/logo.png";
import { Button, Container } from "react-bootstrap"

const Header = () => {
  return (
    <Container className="mt-4">
      <div className="text-center">
        <img src={logo} alt="Logo" />
        <p className="text-secondary">
          <small>Journalism Without Fear or Favour</small>
        </p>
        <p>{moment().format("dddd, MMMM D, YYYY")}</p>
      </div>
      <div className="d-flex bg-light p-2 rounded">
        <Button variant="danger">Latest</Button>
        <Marquee className="text-danger" speed={60}>
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as...
        </Marquee>
      </div>
    </Container>
  );
};

export default Header;
