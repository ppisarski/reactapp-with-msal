import React from 'react';
import { connect } from 'react-redux';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

const Welcome = (props) => (
    <Card>
        <Card.Header className="text-center my-auto">
            <h1>Hello!</h1>
        </Card.Header>
        <Card.Body>
            <Container>
                <h4>Welcome back {(props.account || {"name": ""}).name.split(" ")[0]}.</h4>
            </Container>
        </Card.Body>
        <Card.Footer className="text-muted text-center my-auto">
            <p>This is just an example app.</p>
        </Card.Footer>
    </Card>
)

const mapStateToProps = state => {
    return {
        account: state.authentication.account,
    };
}

export default connect(mapStateToProps)(Welcome);