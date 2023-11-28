import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <Container>
      <h2>Our Terms and Conditions</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error porro
        voluptatum ipsa necessitatibus. Sit quae, excepturi eius cumque id
        magni.
      </p>
      <p>
        Go back to <Link to="/register">Register</Link>
      </p>
    </Container>
  );
};

export default Terms;
