import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";

const SuccessLogin = ({ name }) => {
  return (
    <>
      <Container>
        <Image
          src="https://pasadena.edu/academics/support/success-centers/stem-centers/images/success-center_STEM.png"
          rounded
          fluid
          className="mb-3"
        />
        <h4 className="mb-3">{`Thank you for logging in ${name}!`}</h4>
      </Container>
    </>
  );
};

export default SuccessLogin;
