import { useState } from "react";

import { useEntry } from "../hooks/useEntry";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap//FloatingLabel";

const EntryForm = ({ id, name, reasonList, professors }) => {
  const { entry, isLoading, error } = useEntry();

  const [reason, setReason] = useState(reasonList[0]);
  const [professor, setProfessor] = useState(professors[0]);

  const entrySubmit = async (e) => {
    e.preventDefault();
    await entry(id, name, reason, professor);
  };

  return (
    <Form onSubmit={entrySubmit}>
      <Form.Group className="mb-3">
        <h2>{`Welcome ${name}`}</h2>
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
        <FloatingLabel label="Professor: " className="mb-3">
          <Form.Select
            aria-label="Default select example"
            onChange={(e) => setProfessor(e.target.value)}
            value={professors[0]}
          >
            {professors.map((professor, index) => {
              return (
                <option value={professor} key={index}>
                  {professor}
                </option>
              );
            })}
          </Form.Select>
        </FloatingLabel>
        <Button variant="primary" type="submit" disabled={isLoading}>
          Submit
        </Button>
      </Form.Group>
    </Form>
  );
};

export default EntryForm;
