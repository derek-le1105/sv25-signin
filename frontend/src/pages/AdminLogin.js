import { useState } from "react";

import { useAdminLogin } from "../hooks/useAdminLogin";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";

const AdminLogin = () => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  const { login, isLoading, error } = useAdminLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
  };

  return (
    <Form onSubmit={handleSubmit} className="admin-login">
      <Form.Group className="mb-3">
        <h3 className="mb-3">Administrator Log In</h3>
        <FloatingLabel label="Username" className="mb-3">
          <Form.Control
            type="text"
            label="Username"
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
          />
        </FloatingLabel>
        <FloatingLabel label="Password" className="mb-3">
          <Form.Control
            type="password"
            label="Password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </FloatingLabel>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form.Group>
    </Form>
  );
};

export default AdminLogin;
