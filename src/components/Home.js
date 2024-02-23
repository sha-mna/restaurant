import React, { useState, useEffect } from 'react';
import { Row, Card, Container, Col } from 'react-bootstrap';
import RestaurantCard from './RestaurantCard';

function Home() {
    const [data, setData] = useState([])

    const fetchData = async () => {
        await fetch('/restaurants.json')               // successfully fetch cheithal
        .then((data) => data.json())                   // data is converted again to json data
        .then((data) => setData(data.restaurants))     // again data is assigned to state
    }

    useEffect(() => {
        fetchData()
    },[]);
    

    return (
        <Container>
            <Row>
                {data.map((item) => (                         // each obj in an array is item
                    <Col sm={12} md={8} lg={6} xl={3}>
                        {/* <Card>
                            <Card.Img variant="top" src={item.photograph} />
                            <Card.Body>
                                <Card.Title>{item.name}</Card.Title>
                                <Card.Text>
                                    {item.neighborhood}
                                </Card.Text>
                            </Card.Body>
                        </Card> */}
                        <RestaurantCard item={item} />
                    </Col>
                   
                ))}
            </Row>

        </Container>
    )
}

export default Home;