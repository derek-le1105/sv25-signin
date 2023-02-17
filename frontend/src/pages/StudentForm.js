import { useState } from "react";

import { useStudent } from "../hooks/useStudent";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const StudentForm = () => {
  const [id, setID] = useState("");
  const { student, isLoading, error } = useStudent();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(id);
    await student(id);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>ID Number</Form.Label>
        <Form.Control type="text" onChange={(e) => setID(e.target.value)} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default StudentForm;
