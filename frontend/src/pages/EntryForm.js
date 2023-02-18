import { useState } from "react";
import { useEntry } from "../hooks/useEntry";

import SuccessLogin from "./SuccessLogin";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap//FloatingLabel";
import Image from "react-bootstrap/Image";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";

import asyncTimeout from "../asyncTimeout";

const EntryForm = ({ id, name, reasonList, professors, setID, setExists }) => {
  const { entry, isLoading } = useEntry();

  const [reason, setReason] = useState(reasonList[0]);
  const [professor, setProfessor] = useState(professors[0]);
  const [response, setResponse] = useState(false);

  const entrySubmit = async (e) => {
    e.preventDefault();
    const entryResp = await entry(id, name, reason, professor);
    if (entryResp) {
      setResponse(true);
      await asyncTimeout({ timeout: 2000 });
      setExists(null);
      setResponse(false);
      setID(null);
    }
  };

  const backSubmit = () => {
    setExists(null);
  };

  return (
    <>
      {!response && (
        <Form onSubmit={entrySubmit}>
          <Form.Group className="mb-3">
            <Image
              src="https://pasadena.edu/academics/support/success-centers/stem-centers/images/success-center_STEM.png"
              rounded
              fluid
              className="mb-3"
            />
            <h2 className="mb-3">{`Welcome ${name}`}</h2>
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
            <FloatingLabel label="Professor: " className="mb-3">
              <Form.Select
                aria-label="Default select example"
                onChange={(e) => setProfessor(e.target.value)}
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
          </Form.Group>
        </Form>
      )}
      {response && <SuccessLogin name={name} />}
    </>
  );
};

export default EntryForm;
