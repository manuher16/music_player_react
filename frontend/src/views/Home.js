import React from 'react';
import { Row, Col, Container, Card, Image } from 'react-bootstrap';
import Button from "../components/Button"
import styles from '../styles/index'

const Home = () => {
    const styleContainer = {
        backgroundColor: '#f5f2f0',
        height: '100vh',
    }
    const styleCard = {
        margin: '30px',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '30px',
        fontColor: '#fff',
        fontWeight: 'bold',
    }
    const styleImage = {
        width: '350px',
        height: '350px',
        borderRadius: '50%',
        margin: '30px',
        elevation: '10px',
        boxShadow: '0px 0px 10px #000000',
    }
    return (
        <Container fluid style={styleContainer}>
            <Row>
                <Col>
                    <Button icon={<i class="bi bi-arrow-left" ></i>} position="top-left" size="large" />
                </Col>
                <Col >
                    <Card style={styleCard}>

                        Playing Now
                    </Card>
                </Col>
                <Col>
                    <Button icon={<i class="bi bi-list" ></i>} position="top-right" size="large" />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card>
                        <Image style={styleImage} src="https://blogmistermusic.files.wordpress.com/2016/10/starboy1.jpg" width="350px" height="350px" />                    </Card>
                </Col>
            </Row>
        </Container>

    );
}
export default Home;