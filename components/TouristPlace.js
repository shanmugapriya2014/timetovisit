import React from 'react';
import'./Styles/TouristPlace.css';
import { Link } from 'react-scroll';
// import { HashLink as Link } from 'react-router-hash-link';
import { Row, Col } from 'react-bootstrap'

const TouristPlaces = () => {
  return (
    <div className='container'>
        <p className='text-center  places-text'>
            Tourist Places To Tamil Nadu 
            <br />
            Here Are The Top Places To Visit In Tamil Nadu In 2023
        </p>
        
        <ul className='bottomMargin topMargin '>
                <Row>
                    <Col className="text-center">
                        <li>
                            <Link to='chennai' smooth='true' offset='100' duration='200'>Chennai</Link> 
                        </li>
                    </Col>
                    <Col className="text-center">
                        <li>
                            <Link to='kodaikanal' smooth='true' offset='100' duration='200'>Kodaikanal</Link> 
                        </li>
                    </Col>
                    <Col className="text-center">
                        <li>
                            <Link to='madurai' smooth='true' offset='100' duration='200'>Madurai</Link> 
                        </li>
                    </Col>
                    <Col className="text-center">
                        <li>
                            <Link to='kumbakonam' smooth='true' offset='100' duration='200'>Kumbakonam</Link> 
                        </li>
                    </Col>
                    <Col className="text-center">   
                        <li>
                            <Link to='theni' smooth='true' offset='100' duration='200'>Theni</Link> 
                        </li>
                    </Col>
                </Row>
                <Row>
                    <Col className="text-center">
                        <li>
                            <Link to='rameswaram' smooth='true' offset='100' duration='200'>Rameswaram</Link>
                        </li>
                    </Col>
                    <Col className="text-center">
                        <li>
                           <Link to='ooty' smooth='true' offset='100' duration='200'>Ooty</Link> 
                        </li>
                    </Col>
                    <Col className="text-center">
                        <li>
                            <Link to='kanyakumari' smooth='true' offset='100' duration='200'>Kanyakumari</Link> 
                        </li>
                    </Col>
                    <Col className="text-center">
                        <li>
                            <Link to='yarcaud' smooth='true' offset='100' duration='200'>Yarcaud</Link> 
                        </li>
                    </Col>
                    <Col className="text-center">
                        <li>
                            <Link to='hogenakkal' smooth='true' offset='100' duration='200'>Hogenakkal</Link> 
                        </li>
                    </Col>
                </Row>
            </ul>
            </div>
            
  )
}

export default TouristPlaces
