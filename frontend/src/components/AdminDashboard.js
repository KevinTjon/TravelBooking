import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row, Col, Card, Table, Button, Form } from 'react-bootstrap';
import { updateUser } from '../store/userSlice';

const AdminDashboard = () => {
  const users = useSelector(state => state.user); // Ensure state.user is correctly mapped to users
  const dispatch = useDispatch();

  // Check if users is an array before mapping over it
  if (!Array.isArray(users)) {
    return <div>Loading...</div>; // Or handle the loading state appropriately
  }

  return (
    <Container className="mt-5">
      <Row>
        <Col md={6}>
          <Card className="mb-4">
            <Card.Header>Manage Users</Card.Header>
            <Card.Body>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map(user => ( // Ensure users is mapped only when it's an array
                    <tr key={user.id}>
                      <td>{user.id}</td>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.role}</td>
                      <td>
                        <Button variant="danger" size="sm">Delete</Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminDashboard;
