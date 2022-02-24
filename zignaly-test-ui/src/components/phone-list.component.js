import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';
import { Container, Spinner, Alert, Row, Col, Card } from "react-bootstrap";
import { getPhones } from "../store/selectors/phone.selector";
import { selectPhone, setPhones } from "../store/actions/phone.action";
import PhoneDataService from "../services/phone.service";
import notifier from "../services/notify.service";

const PhoneListContainer = () => {
    const phones = useSelector(getPhones);
    const dispatch = useDispatch();
    const history = useHistory();

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        loadPhones();
    }, [])

    const loadPhones = async () => {
        await PhoneDataService.getAll()
            .then((phones) => dispatch(setPhones(phones)))
            .catch((err) => notifier.error(`Failed to get phones`));
        setLoading(false);
    }

    const handleSelectPhone = (phone) => {
        dispatch(selectPhone(phone));
        history.push('/phone-details')
    }

    return (
        <Container fluid>
            {loading &&
            <div className="text-center vh-100 d-flex justify-content-center align-items-center">
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
            }
            {
                !loading && !phones.length &&
                <Alert variant="primary" >No Phone</Alert>
            }
            {
                !loading && phones.length > 0 &&
                <Row>
                    {phones.map((phone) => (
                        <Col xs={12} sm={6} md={4} lg={3} key={phone.id} className="mb-3">
                            <Card className="text-center card-item h-100" bg="primary" onClick={() => handleSelectPhone(phone)}>
                                <Card.Img variant="top" src={phone.image || ''}></Card.Img>
                                <Card.Body className="d-flex justify-content-center align-items-center">
                                    <Card.Title className="text-white m-0">{phone.model || 'Unknown'}</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            }
        </Container>
    )
}

export default PhoneListContainer;