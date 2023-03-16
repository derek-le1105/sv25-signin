import { useState } from "react";

import { Form, Button, FloatingLabel } from "react-bootstrap";

const EntryFilter = () => {
  const [name, setName] = useState(null);
  const [id, setID] = useState(null);
  const [reason, setReason] = useState(null);
  const [professor, setProfessor] = useState(null);
  const [date, setDate] = useState(null);

  const handSubmit = async (e) => {};

  return (
    <div className="filter-form">
      <Form onSubmit={handSubmit}>
        <h2 className="mb-3">Filter</h2>
        <FloatingLabel label="ID Number" className="mb-3">
          <Form.Control
            type="text"
            placeholder="ID Number"
            onChange={(e) => setID(e.target.value)}
          />
        </FloatingLabel>
        <FloatingLabel label="Name" className="mb-3">
          <Form.Control
            type="text"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
        </FloatingLabel>
        <FloatingLabel label="Reason" className="mb-3">
          <Form.Control
            type="text"
            placeholder="Reason"
            onChange={(e) => setReason(e.target.value)}
          />
        </FloatingLabel>
        <FloatingLabel label="Professor" className="mb-3">
          <Form.Control
            type="text"
            placeholder="Professor"
            onChange={(e) => setProfessor(e.target.value)}
          />
        </FloatingLabel>
        <FloatingLabel label="Date" className="mb-3">
          <Form.Control type="date" onChange={(e) => setDate(e.target.value)} />
        </FloatingLabel>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default EntryFilter;
