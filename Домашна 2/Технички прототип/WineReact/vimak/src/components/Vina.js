import api from '../api/axiosConfig';
import { useState, useEffect } from 'react';
import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import Navbar from './hero/navbar';
import './Vina.css'; 
import Logo from './hero/Logo'


export default function Vina() {
  const [wines, setWines] = useState([]);

  const getWines = async () => {
    try {
      const response = await api.get("/api/v1/wines");
      setWines(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getWines();
  }, []);

  return (
    <div className='background'>
      <Navbar />
      <Container fluid>
        <Row className="wine-container">
          {wines &&
            wines.map((wine) => (
              <Col key={wine.id} lg={4} md={6} sm={12} className="wine-card-col">
                <Card className="wine-card">
                  <Card.Img
                    variant="top"
                    src={wine.wine_url}
                    alt={wine.wine_name}
                    className="wine-card-img"
                  />
                  <Card.Body className="d-flex flex-column">
                    <Card.Title>{wine.winery} {wine.wine_name}</Card.Title>
                    <Card.Text>
                      Цена: {wine.wine_price}ден.
                    </Card.Text>
                    <Button variant="primary" className="wine-card-button">
                      Додај во корпа
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
        </Row>
      </Container>
      <hr/>
      <div className="footer">
                    <div className="f1">
                        <div id="kontakt">Контакт:</div>
                        <div className='kf1'>Е-пошта: vimak@vimak.com</div>
                        <div className='kf1'>Телефон: 070/000-000</div>
                        <br></br>
                        <div>Сите права се задржани</div>
                    </div>
                    <div className="f2">
                      <div className='f2Logo'>
                            <Logo/>
                          </div>
                    </div>
                    <div className="f3">
                    <br/>
                        <div id="politika">Политика на приватност</div>
                        <div>Услови за купување</div>
                    </div>
                </div>
    </div>
    
  );
}
