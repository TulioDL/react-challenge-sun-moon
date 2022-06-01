import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import City from "./City";

const InfoGrid = (props) => {
    return (
        <Container>
            <Row>
                <Col>
                    <City city="Berlin" type={props.type} />
                </Col>
                <Col>
                    <City city="Santiago" type={props.type} />
                </Col>
            </Row>
            <Row>
                <Col>
                    <City city="New York" type={props.type} />
                </Col>
                <Col>
                    <City city="Madrid" type={props.type} />
                </Col>
            </Row>
            <Row>
                <Col>
                    <City city="Santo Domingo" type={props.type} />
                </Col>
                <Col>
                    <City city="Caracas" type={props.type} />
                </Col>
            </Row>
        </Container>
    );
};

export default InfoGrid;
