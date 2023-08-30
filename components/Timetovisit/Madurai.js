import React, { useState } from 'react';
import '../../components/Styles/Timetovisit/Chennai.css'
import { Row,Col } from 'react-bootstrap'
import {Button,Offcanvas } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Madurai1 from '../../img/madurai1.jpeg'
import Madurai2 from '../../img/madurai2.jpeg'
import Madurai3 from '../../img/madurai3.jpeg'


const Madurai = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return (
    <div className='container'>
      <Row className="align-items-center">
        <Col md={6}  className="text-right">
          <h1 className='besttimetovisit-primary-heading'>07. Madurai</h1>
          <h4 className='besttimetovisit-primary-sub-heading'>What is the best time to visit:</h4>
          <p className='besttimetovisit-text'> 
            October to March is the best time to visit Madurai. With a hot and dry climate for most of the year, Madurai is best visited during the winter season. The town is known for its ancient temples i and other architectural and religious masterpieces and receives a generous crowd of people throughout the year. Madurai is the most fascinating and welcoming during the months between October and March which coincides with its winter season.
          </p>
          <p className='besttimetovisit-text besttimetovisit-bottomtext'>
            Madural is one of the oldest culturally vibrant cities of India. Its historical places and temples have a steady flow of tourists from all around the world.
          </p>
        </Col>
        <Col md={6} className='model-margintop'> 
         <div
            className="modal show"
            style={{ display: 'block', position: 'relative' }}
            >
            <Modal.Dialog>
              <Modal.Header closeButton>
                <Modal.Title className='text-center modal-heading'>More About Best Time To Travel To Madurai</Modal.Title>
              </Modal.Header>
              <Modal.Body className=''>
                <div className='modal-img'>
                  <div className='row'>
                    <div className='col-sm-4'>
                      <img 
                        src={Madurai1} 
                        alt="Madurai1_img"
                        className='' 
                        style={{width:'100px',height:'150px'}}
                      />
                      <p className='text-center'></p>
                    </div>
                    <div className='col-sm-4'>
                      <img 
                        src={Madurai2} 
                        alt="Madurai2_img"
                        className='' 
                        style={{width:'100px',height:'150px'}}
                      />
                      <p className='text-center'></p>
                    </div>
                    <div className='col-sm-4'>
                      <img 
                       src={Madurai3} 
                       alt="Madurai3_img"
                       className=''
                       style={{width:'100px',height:'150px'}}
                     />  
                     <p className='text-center'></p>
                    </div>
                  </div>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Close</Button>
                <Button variant="primary" onClick={handleShow}>Save changes</Button>
              </Modal.Footer>
            </Modal.Dialog>
          </div>  
               
          <div>
              
             
            <Offcanvas show={show} onHide={handleClose} placement="start">
              <Offcanvas.Header closeButton>
                <Offcanvas.Title className='offcanvas-title'>Best Time To Visit In <br />Madurai</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                  <h4 className='season-title'>Madurai in Winter (December-February)</h4>
                  <p className='season-text besttimetovisit-bottomtext'>
                    Many locals look forward to the winter season in Madurai due to the relief it brings from the summers. The season lasts from December to February. The temperature during the winter months ranges from 20 degree Celsius to 29 degree Celsius. The season is characterised by moderately cool temperatures which make travelling around the city a pleasant experience for all individuals. Pongal, a widely celebrated festival is regarded as extremely special in Madurai. The festival lasts for three days and comprises of praying for a good harvest by locals and farmers alike. Other religious festivals are also celebrated with great vigour. However, hotel prices may climb up as this is the peak tourist season.
                  </p>
                  <h4 className='season-title'>Madurai in Monsoon (June-August)</h4>
                  <p className='season-text besttimetovisit-bottomtext'>
                    Monsoon season in Madurai lasts from June to August. Although the monsoon season continues for a smaller amount of time, the south-west monsoon winds bring in a large amount of rainfall which is extremely heavy. This rainfall also makes the weather gloomy but still makes the city beautiful as the nature around Madurai mainly benefits from this rain. This is the perfect time to visit Madurai for people who love greenery and the lush natural surroundings.
                  </p>
                  <h4 className='season-title'>Madurai in Summer (March-July)</h4>
                  <p className='season-text besttimetovisit-bottomtext'>
                    The summer season in Madurai lasts from March to May. The temperatures during this season range from 24 degree Celsius to 34 degree Celsius. This means that the weather in Madurai during these months is uncharacteristically hot. It is also really dry which makes the heat more noticeable and discourages travellers to visit. The summer season is, therefore, an offseason for Madurai, and the crowds are comparatively less as well.
                  </p>
              </Offcanvas.Body>
            </Offcanvas>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Madurai  