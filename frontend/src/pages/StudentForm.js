import { useState } from "react";

import { useStudent } from "../hooks/useStudent";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap//FloatingLabel";

import EntryForm from "./EntryForm";
import SignupForm from "./SignupForm";

const StudentForm = () => {
  const { getStudent, isLoading, error, exists, name, professors } =
    useStudent();

  const [id, setID] = useState("");

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

  return (
    <>
      {exists === null && (
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <FloatingLabel label="ID Number" className="mb-3">
              <Form.Control
                type="text"
                onChange={(e) => setID(e.target.value)}
                placeholder="ID Number"
              />
            </FloatingLabel>
          </Form.Group>
          <Button variant="primary" type="submit" disabled={isLoading}>
            Submit
          </Button>
        </Form>
      )}
      {exists === true && (
        <EntryForm
          id={id}
          name={name}
          reasonList={reasonList}
          professors={professors}
        />
      )}
      {exists === false && <SignupForm id={id} reasonList={reasonList} />}
    </>
  );
};

export default StudentForm;
