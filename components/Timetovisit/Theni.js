import React, { useState } from 'react';
import '../../components/Styles/Timetovisit/Chennai.css'
import { Row,Col } from 'react-bootstrap'
import {Button,Offcanvas } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Theni1 from '../../img/theni1.jpeg'
import Theni2 from '../../img/theni2.jpeg'
import Theni3 from '../../img/theni3.jpeg'


const Theni = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return (
    <div className='container'>
      <Row className="align-items-center">
        <Col md={6}  className="text-right">
          <h1 className='besttimetovisit-primary-heading'>09. Theni</h1>
          <h4 className='besttimetovisit-primary-sub-heading'>What is the best time to visit:</h4>
          <p className='besttimetovisit-text'> 
            In order to spend your vacation in the lap of nature in south India, no place would be better than the town of Cardamom Theni. The best season to visit Theni is winter when the weather remains all pleasant and favourable for tourism. On the other hand, summer remains hot and monsoon receives a heavy rainfall which makes the two seasons not suitable for touring.
          </p>
          <p className='besttimetovisit-text besttimetovisit-bottomtext'>
            Theni is known for having a salubrious climate throughout the year. The average temperature ranges between 15. degrees Celsius to 40 degrees Celsius. The best months to visit are from the month of December to February since the weather is pleasant and allows you to indulge in a number of outdoor activities.
          </p>
        </Col>
        <Col md={6} className='model-margintop'> 
         <div
            className="modal show"
            style={{ display: 'block', position: 'relative' }}
            >
            <Modal.Dialog>
              <Modal.Header closeButton>
                <Modal.Title className='text-center modal-heading'>More About Best Time To Travel To Theni</Modal.Title>
              </Modal.Header>
              <Modal.Body className=''>
                <div className='modal-img'>
                  <div className='row'>
                    <div className='col-sm-4'>
                      <img 
                        src={Theni1} 
                        alt="Chennai,India Source_img1"
                        className='' 
                        style={{width:'100px',height:'150px'}}
                      />
                      <p className='text-center'></p>
                    </div>
                    <div className='col-sm-4'>
                      <img 
                        src={Theni2} 
                        alt="Chennai,Kathipara Source_img2"
                        className='' 
                        style={{width:'100px',height:'150px'}}
                      />
                      <p className='text-center'></p>
                    </div>
                    <div className='col-sm-4'>
                      <img 
                       src={Theni3} 
                       alt="Chennai,Beach Source_img3"
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
                <Offcanvas.Title className='offcanvas-title'>Best Time To Visit In <br />Theni</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                  <h4 className='season-title'>Theni in Summer</h4>
                  <p className='season-text besttimetovisit-bottomtext'>
                    The summer season in Theni starts from the month of March and continues till May. The months are generally hot and not favourable to visit Theni. Temperature during these months ranges between 24°C and 42°C.
                  </p>
                  <h4 className='season-title'>Theni in Winter</h4>
                  <p className='season-text besttimetovisit-bottomtext'>
                    Monsoon in Theni strikes in the month of June and lasts until September. The town experiences a heavy rainfall during this time that fills the town with zest. Despite being at peak of its beauty, the town of Theni is not best to visit during monsoon.
                  </p>
                  <h4 className='season-title'>Theni in Monsoons</h4>
                  <p className='season-text besttimetovisit-bottomtext'>
                    December marks the beginning of winter season in Theni which ends in the month of February. The temperature during these months varies from 22°C to 32°C, and thus, the town witnesses a pleasant weather and make the season best to visit Theni.
                  </p>
              </Offcanvas.Body>
            </Offcanvas>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Theni  