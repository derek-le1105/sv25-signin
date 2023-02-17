import { useState } from "react";

import { useStudent } from "../hooks/useStudent";
import { useEntry } from "../hooks/useEntry";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap//FloatingLabel";

const StudentForm = () => {
  const [id, setID] = useState("");
  const { student, isLoading, error, exists, name } = useStudent();
  const { idInputted, setIDInputted } = useState(false);

  const reasonList = [
    "Homework/Study",
    "Office Hours",
    "Tutoring",
    "Counseling",
    "Other",
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    await student(id);
    setIDInputted(true);
  };

  const entrySubmit = async (e) => {
    e.preventDefault();
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
        <Form onSubmit={entrySubmit}>
          <Form.Group className="mb-3">
            <h2>{`Welcome ${name}`}</h2>
            <FloatingLabel label="Reason for coming here:" className="mb-3">
              <Form.Select aria-label="Default select example">
                {reasonList.map((reason, index) => {
                  return (
                    <option value={reason} key={index}>
                      {reason}
                    </option>
                  );
                })}
              </Form.Select>
            </FloatingLabel>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form.Group>
        </Form>
      )}
      {exists === false && <span>asdfaaf</span>}
    </>
  );
};

export default StudentForm;
