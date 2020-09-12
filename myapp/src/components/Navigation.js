import React from 'react';
// import { useSelector } from 'react-redux';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import { LinkContainer } from 'react-router-bootstrap';
// import { graphService } from '../serviceProvider';

// const User = (props) => {
//     // const accessToken = useSelector(state => state.authentication.accessToken)
//     // console.log(accessToken);
//     // const userInfo = graphService.getUserInfo(accessToken);
//     // console.log(userInfo);

//     let me = { displayName: "", userPrincipalName: "" };
//     let avatar = null;

//     return (
//         <NavDropdown alignRight title={<UserAvatar avatar={avatar} id="user" />}>
//             <NavDropdown.Header>My account</NavDropdown.Header>
//             <NavDropdown.Item disabled>
//                 <UserAvatar avatar={avatar} width={'240px'} />
//             </NavDropdown.Item>
//             <NavDropdown.Item>
//                 <div>{me.displayName}</div>
//                 <div><small>{me.userPrincipalName}</small></div>
//             </NavDropdown.Item>
//             <LinkContainer to="/signout">
//                 <NavDropdown.Item>Sign Out</NavDropdown.Item>
//             </LinkContainer>
//         </NavDropdown>
//     )
// }

// const UserAvatar = (props) => {
//     const width = props.width || '24px';
//     // If a user avatar is available, return an img tag with the pic
//     if (props.avatar) {
//         return <img
//             src={URL.createObjectURL(props.avatar)}
//             alt="user"
//             className="rounded-circle align-self-center"
//             style={{ width }}></img>;
//     }

//     // No avatar available, return a default icon
//     return <i
//         alt="user"
//         className="far fa-user-circle fa-lg rounded-circle align-self-center"
//         style={{ width }}></i>;
// }

const Navigation = (props) => (
    <Navbar bg="primary" variant="dark" fixed="top" expand="md">
        <Navbar.Brand href="/">MyApp</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar" />
        <Navbar.Collapse id="navbar">
            <Nav className="ml-auto" >
                {/* <User /> */}
            </Nav>
        </Navbar.Collapse>
    </Navbar>
)

export default Navigation;