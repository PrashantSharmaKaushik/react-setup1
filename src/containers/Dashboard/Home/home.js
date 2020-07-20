import React, { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";

class Home extends Component {
    render() {
        return (
            <Container>
                <Row id="home">
                    <Col xs={12} sm={12} md={12} lg={12}>
                        Home
                    </Col>
                </Row>
            </Container>
        )
    }
}