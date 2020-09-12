import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';


const NotFound = () => (
    <Card className="my-auto">
        <Card.Header className="text-center my-auto">
            <h1>Oops! Page not found 404</h1>
        </Card.Header>
        <Card.Body>
            <Container>
                <p>We are sorry, but the page you requested was not found.</p>
            </Container>
        </Card.Body>
    </Card>
);

export default NotFound;