//TODO: MAKE BUTTON FOR ADMIN LOGIN

import { useState, useEffect } from "react";
import { useStudent } from "../hooks/useStudent";

import { useNavigate } from "react-router-dom";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Image from "react-bootstrap/Image";

import EntryForm from "./EntryForm";
import SignupForm from "./SignupForm";

const StudentForm = () => {
  const [exists, setExists] = useState(null);
  const [id, setID] = useState(null);
  const [response, setResponse] = useState(false);
  const navigate = useNavigate();

  const { getStudent, isLoading, error, name, professors } = useStudent({
    setExists,
  });
  const reasonList = [
    "Homework/Study",
    "Office Hours",
    "Tutoring",
    "Counseling",
    "Other",
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    await getStudent(id);
  };

  const adminButton = async (e) => {
    console.log("admin");
    //disable current and go to login
    navigate("/login");
  };

  return (
    <div className="login-container">
      {exists === null && (
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Image
              src="https://pasadena.edu/academics/support/success-centers/stem-centers/images/success-center_STEM.png"
              rounded
              fluid
              className="mb-3"
            />
            <FloatingLabel label="ID Number" className="mb-3">
              <Form.Control
                type="number"
                onChange={(e) => setID(e.target.value)}
                placeholder="ID Number"
                value={id === null ? "" : id}
              />
              <Form.Text muted>{error}</Form.Text>
            </FloatingLabel>
          </Form.Group>

          <Button variant="primary" type="submit" disabled={isLoading}>
            Submit
          </Button>
          <Button
            variant="secondary"
            onClick={adminButton}
            disabled={isLoading}
          >
            Admin
          </Button>
        </Form>
      )}
      {exists === true && (
        <EntryForm
          id={id}
          name={name}
          reasonList={reasonList}
          professors={professors}
          setID={setID}
          setExists={setExists}
        />
      )}
      {exists === false && (
        <SignupForm
          id={id}
          reasonList={reasonList}
          setID={setID}
          setExists={setExists}
        />
      )}
    </div>
  );
};

export default StudentForm;
