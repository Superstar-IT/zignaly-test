import React from "react";
import { Row, Col, Container, Card, Alert } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import { getSelectedPhone } from "../store/selectors/phone.selector";

const PhoneDetail = () => {
    const phone = useSelector(getSelectedPhone);
    if(!phone) {
        return <Redirect to="/phones"/>
    }

    return (
        <Container>
            <Row className="justify-content-center">
                <Col xs={12} sm={8} md={6} lg={4} className="vh-100 d-flex align-items-center justify-content-center">
                    <Card className="text-center mw-35" bg="primary">
                        <Card.Img variant="top" src={phone.image || ''}></Card.Img>
                        <Card.Body className="p-0">
                            <Card.Title className="text-white p-3 m-0">{phone.model || 'Unknown'}</Card.Title>
                            <Card.Body className="bg-light">
                                <Row>
                                    <Col xs={12} md={6} className="mb-xs-4">
                                        <Alert variant="info" className="h-100">
                                            <p className="mb-2 text-start"><span className="mr-2 fw-bold">Display Type: </span>{phone.display?.type ||'Unknown'}</p>
                                            <p className="mb-2 text-start"><span className="mr-2 fw-bold">Display Size: </span>{phone.display?.size ||'Unknown'}</p>
                                            <p className="mb-2 text-start"><span className="mr-2 fw-bold">Display Resolution: </span>{phone.display?.resolution ||'Unknown'}</p>
                                        </Alert>
                                    </Col>
                                    <Col xs={12} md={6} className="mb-xs-4">
                                        <Alert variant="info" className="h-100">
                                            <p className="mb-2 text-start"><span className="mr-2 fw-bold">OS: </span>{phone.display?.type ||'Unknown'}</p>
                                            <p className="mb-2 text-start"><span className="mr-2 fw-bold">CPU: </span>{phone.display?.size ||'Unknown'}</p>
                                            <p className="mb-2 text-start"><span className="mr-2 fw-bold">GPU: </span>{phone.display?.resolution ||'Unknown'}</p>
                                        </Alert>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
} 

export default PhoneDetail;