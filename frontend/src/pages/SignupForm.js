import { useState } from "react";
import { useStudent } from "../hooks/useStudent";
import { useEntry } from "../hooks/useEntry";

import SuccessLogin from "./SuccessLogin";

import {
  Form,
  Button,
  FloatingLabel,
  Image,
  ButtonGroup,
  ButtonToolbar,
} from "react-bootstrap";

import asyncTimeout from "../asyncTimeout";

const SignupForm = ({ id, reasonList, setID, setExists }) => {
  const { isLoading, createStudent } = useStudent({ setExists });
  const { entry, error } = useEntry();

  const [validated, setValidated] = useState(false);
  const [name, setName] = useState(null);
  const [reason, setReason] = useState(reasonList[0]);
  const [professors, setProfessors] = useState(null);
  const [response, setResponse] = useState(false);

  const signupSubmit = async (e) => {
    e.preventDefault();
    const createResp = await createStudent(id, name, professors);
    const entryResp = await entry(id, name, reason, professors);
    if (createResp && entryResp) {
      setResponse(true);
      await asyncTimeout({ timeout: 2000 });
      setExists(null);
      setResponse(false);
      setID(null);
    }

    setValidated(true);
  };

  const backSubmit = () => {
    setExists(null);
  };

  return (
    <>
      {!response && (
        <Form noValidate validated={validated} onSubmit={signupSubmit}>
          <Image
            src="https://pasadena.edu/academics/support/success-centers/stem-centers/images/success-center_STEM.png"
            rounded
            fluid
            className="mb-3"
          />
          <h3 className="mb-3">{`Welcome to SV25! Please enter your details below!`}</h3>
          <Form.Group controlId="validationCustom01">
            <FloatingLabel label="Name" className="mb-3">
              <Form.Control
                type="text"
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please input a name
              </Form.Control.Feedback>
            </FloatingLabel>
          </Form.Group>

          <FloatingLabel label="Reason for coming here:" className="mb-3">
            <Form.Select
              aria-label="Default select example"
              onChange={(e) => setReason(e.target.value)}
            >
              {reasonList.map((reason, index) => {
                return (
                  <option value={reason} key={index}>
                    {reason}
                  </option>
                );
              })}
            </Form.Select>
          </FloatingLabel>
          <FloatingLabel label="Professors" className="mb-3">
            <Form.Control
              type="text"
              placeholder="Professors"
              onChange={(e) => setProfessors(e.target.value)}
              required
            />
            {validated && (
              <Form.Control.Feedback type="invalid">
                Please input a valid list of professors
              </Form.Control.Feedback>
            )}

            <Form.Text muted>Example: Ah, Gimino, Hall, Smith</Form.Text>
          </FloatingLabel>
          {/*<Form.Text muted>{error}</Form.Text>*/}
          <ButtonToolbar className="float-end">
            <ButtonGroup className="me-2" aria-label="First group">
              <Button variant="outline-dark" onClick={backSubmit}>
                Back
              </Button>
            </ButtonGroup>
            <ButtonGroup className="me-2" aria-label="First group">
              <Button variant="primary" type="submit" disabled={isLoading}>
                Submit
              </Button>
            </ButtonGroup>
          </ButtonToolbar>
        </Form>
      )}
      {response && <SuccessLogin name={name} />}
    </>
  );
};

export default SignupForm;
