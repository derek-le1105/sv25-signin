import { useState } from "react";

import { useStudent } from "../hooks/useStudent";
import { useEntry } from "../hooks/useEntry";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap//FloatingLabel";

const SignupForm = ({ id, reasonList }) => {
  const { isLoading, error, createStudent } = useStudent();
  const { entry } = useEntry();

  const [name, setName] = useState(null);
  const [reason, setReason] = useState(reasonList[0]);
  const [professors, setProfessors] = useState(null);

  const signupSubmit = async (e) => {
    e.preventDefault();
    console.log(professors.split(", "));
    await createStudent(id, name, professors.split(", "));
    await entry(id, name, reason, professors.split(", ")[0]);
  };

  return (
    <Form onSubmit={signupSubmit}>
      <Form.Group className="mb-3">
        <h2>{`Welcome to SV25! Please enter your details below!`}</h2>
        <FloatingLabel label="Name" className="mb-3">
          <Form.Control
            type="text"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
        </FloatingLabel>
        <FloatingLabel label="Reason for coming here:" className="mb-3">
          <Form.Select
            aria-label="Default select example"
            onChange={(e) => setReason(e.target.value)}
            value={reasonList[0]}
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
          />
          <Form.Text muted>Please list all your professors you have</Form.Text>
          <br></br>
          <Form.Text muted>Example: Ah, Gimino, Hall, Smith</Form.Text>
        </FloatingLabel>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form.Group>
    </Form>
  );
};

export default SignupForm;
