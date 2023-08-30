import React, { useState } from 'react';
import '../../components/Styles/Timetovisit/Chennai.css'
import { Row,Col } from 'react-bootstrap'
import {Button,Offcanvas } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Kodaikanal1 from '../../img/kodaikanal1.jpeg'
import Kodaikanal2 from '../../img/kodaikanal1....jpeg'
import Kodaikanal3 from '../../img/kodaikanal3.jpeg'


const Kodaikanal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return (
    <div className='container'>
      <Row className="align-items-center">
        <Col md={6}  className="text-right">
          <h1 className='besttimetovisit-primary-heading'>03. Kodaikanal</h1>
          <h4 className='besttimetovisit-primary-sub-heading'>What is the best time to visit:</h4>
          <p className='besttimetovisit-text'> 
            The best time to visit Kodaikanal is from October to June, however, the weather remains a bit chilly during December and January. Ideal for a vacation in each season, Kodaikanal is the most colourful in summers and most picturesque in monsoons. If your trip consists of an itinerary that includes a lot of sights to see, then summer is the best time to visit this place and those who wish to go for trekking, plan your trip to Kodaikanal between October and February.
          </p>
          <p className='besttimetovisit-text besttimetovisit-bottomtext'>
            Kodaikanal is lovingly referred to as The Princess of Hill stations. And boy, does it take this title seriously! Built around an exotic star shaped lake, the region exudes ethereal charm like that of fairy-tales. The best time to visit Kodaikanal is from October- June however, the weather remains a bit chilly during December and January.
          </p>
        </Col>
        <Col md={6} className='model-margintop'> 
         <div
            className="modal show"
            style={{ display: 'block', position: 'relative' }}
            >
            <Modal.Dialog>
              <Modal.Header closeButton>
                <Modal.Title className='text-center modal-heading'>More About Best Time To Travel To Kodaikanal</Modal.Title>
              </Modal.Header>
              <Modal.Body className=''>
                <div className='modal-img'>
                  <div className='row'>
                    <div className='col-sm-4'>
                      <img 
                        src={Kodaikanal1} 
                        alt="Upper Lake Source_img1"
                        className='' 
                        style={{width:'100px',height:'150px'}}
                      />
                      <p className='text-center'>Upper<br />Lake <br /> Source</p>
                    </div>
                    <div className='col-sm-4'>
                      <img 
                        src={Kodaikanal2} 
                        alt="Kodaikanal Lake Source_img2"
                        className='' 
                        style={{width:'100px',height:'150px'}}
                      />
                      <p className='text-center'>Kodaikanal<br />Lake<br /> Source</p>
                    </div>
                    <div className='col-sm-4'>
                      <img 
                       src={Kodaikanal3} 
                       alt="Pillar Rocks Source_img3"
                       className=''
                       style={{width:'100px',height:'150px'}}
                     />  
                     <p className='text-center'>Pillar<br />Rocks<br /> Source</p>
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
                <Offcanvas.Title className='offcanvas-title'>Best Time To Visit In <br />Kodaikanal</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                  <h4 className='season-title'>Kodaikanal in Summer (March-June)</h4>
                  <p className='season-text besttimetovisit-bottomtext'>
                    Summers (March to June) in Kodaikanal is ideal with comfortable 20 degree Celsius to 32 degree Celsius temperature and flowers in full bloom. The ten days long Grand Annual Summer Festival, which takes place in May, attracts many tourists. From elegant fruit exhibitions to enthralling boat races, flower art- works, classical dance performances and melodious musicals, the Summer Festival is a platter of different shows. Kodaikanal also holds fantastic festivals like Panguni Uthiram in March and the Annual Horticulture Show in May.
                  </p>
                  <h4 className='season-title'>Kodaikanal in Winter (December - February) </h4>
                  <p className='season-text besttimetovisit-bottomtext'>
                    Summers (March to June) in Kodaikanal is ideal with comfortable 20 degree Celsius to 32 degree Celsius temperature and flowers in full bloom. The ten days long Grand Annual Summer Festival, which takes place in May, attracts many tourists. From elegant fruit exhibitions to enthralling boat races, flower art- works, classical dance performances and melodious musicals, the Summer Festival is a platter of different shows. Kodaikanal also holds fantastic festivals like Panguni Uthiram in March and the Annual Horticulture Show in May.
                  </p>
                  <h4 className='season-title'>Kodaikanal in Monsoon (June-September)</h4>
                  <p className='season-text besttimetovisit-bottomtext'>
                    With a temperature that rarely falls below 8 degree Celsius, winter in Kodaikanal (between December and February) is the best time to enjoy various treks, and attend the famous Pongal festival celebrated during January.
                  </p>
              </Offcanvas.Body>
            </Offcanvas>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Kodaikanal  