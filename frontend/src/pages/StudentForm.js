import { useState, useEffect } from "react";
import { useStudent } from "../hooks/useStudent";
import { useNavigate } from "react-router-dom";
import { Form, Button, FloatingLabel, Image } from "react-bootstrap";

import EntryForm from "./EntryForm";
import SignupForm from "./SignupForm";

const StudentForm = () => {
  const [exists, setExists] = useState(null);
  const [id, setID] = useState(null);
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

  const adminButton = (e) => {
    navigate("/login");
  };

  return (
    <div className="pages">
      <div className="login">
        {
          /*for initial display and when user inputs empty*/
          exists === null && (
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
          )
        }
        {
          /*when a student is found in database*/
          exists === true && (
            <EntryForm
              id={id}
              name={name}
              reasonList={reasonList}
              professors={professors}
              setID={setID}
              setExists={setExists}
            />
          )
        }
        {
          /*when a student isn't found in database*/
          exists === false && (
            <SignupForm
              id={id}
              reasonList={reasonList}
              setID={setID}
              setExists={setExists}
            />
          )
        }
      </div>
    </div>
  );
};

export default StudentForm;
