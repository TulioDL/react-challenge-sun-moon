import React from "react";
import { Nav } from "react-bootstrap";
// import { NavLink } from "react-router-dom";

const MainHeader = () => {
    return (
        <Nav defaultActiveKey="/sun" className="justify-content-center">
            <Nav.Item>
                <Nav.Link href="/sun">Sun</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/moon">Moon</Nav.Link>
            </Nav.Item>
        </Nav>
    );
};

export default MainHeader;
