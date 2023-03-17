import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAdminLogin } from "../hooks/useAdminLogin";
import { Form, Button, FloatingLabel, ButtonGroup } from "react-bootstrap";

const AdminLogin = () => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  const navigate = useNavigate();

  const { login, isLoading, error } = useAdminLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
  };

  const homeSubmit = (e) => {
    navigate("/");
  };

  return (
    <div className="pages">
      <Form onSubmit={handleSubmit} className="login">
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
          <Form.Text muted>{error}</Form.Text>
          <Button variant="primary" type="submit">
            Submit
          </Button>
          <Button variant="secondary" onClick={homeSubmit}>
            Home
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default AdminLogin;
