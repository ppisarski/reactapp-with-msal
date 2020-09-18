import React, { useState, useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { LinkContainer } from 'react-router-bootstrap';
import * as graphService from '../services/graph';

const User = (props) => {
    const [userInfo, setUserInfo] = useState({});
    const [userPhoto, setUserPhoto] = useState(null);

    useEffect(() => {
        const fetchData = async (service) => {
            const ui = await graphService.getUserInfo();
            const up = await graphService.getUserPhoto();
            setUserInfo(ui);
            setUserPhoto(up);
        };
        fetchData(graphService);
    }, []);

    console.log(userInfo);
    console.log(userPhoto)
    return (
        <NavDropdown alignRight title={<UserAvatar avatar={userPhoto} id="user" />}>
            <NavDropdown.Header>My account</NavDropdown.Header>
            <NavDropdown.Item disabled>
                <UserAvatar avatar={userPhoto} width={'240px'} />
            </NavDropdown.Item>
            <NavDropdown.Item>
                <div>{userInfo.displayName}</div>
                <div><small>{userInfo.userPrincipalName}</small></div>
            </NavDropdown.Item>
            <LinkContainer to="/signout">
                <NavDropdown.Item>Sign Out</NavDropdown.Item>
            </LinkContainer>
        </NavDropdown>
    )
}

const UserAvatar = (props) => {
    const width = props.width || '24px';
    // If a user avatar is available, return an img tag with the pic
    if (props.avatar) {
        return <img
            alt=""
            src={URL.createObjectURL(props.avatar)}
            className="rounded-circle align-self-center"
            style={{ width }}
        />;
    }

    // No avatar available, return a default icon
    return <i
        alt=""
        className="far fa-user-circle fa-lg rounded-circle align-self-center"
        style={{ width }}
    />;
}

const Navigation = (props) => (
    <Navbar bg="primary" variant="dark" fixed="top" expand="md">
        <Navbar.Brand href="/">MyApp</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar" />
        <Navbar.Collapse id="navbar">
            <Nav className="ml-auto" >
                <User />
            </Nav>
        </Navbar.Collapse>
    </Navbar>
)

export default Navigation;