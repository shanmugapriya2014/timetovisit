import React, { useState } from 'react';
import { Row,Col } from 'react-bootstrap'
import {Button,Offcanvas } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import '../../components/Styles/Timetovisit/Rameshwaram.css'
import Yercaud1 from '../../img/yercaud1.jpeg'
import Yercaud2 from '../../img/yercaud2.jpeg'
import Yercaud3 from '../../img/yercaud3.jpeg'

const Yercaud = () => {

    const [isModalOpen] = useState(false);
    const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);
  
    const handleOpen = () => {
       setIsOffcanvasOpen(true);
    };
  
    const handleClose = () => {
      setIsOffcanvasOpen(false);
    };


  return (
    <div className='container even-marginbttom'>
      <h1 className='besttimetovisit-primary-heading'>08. Yercaud</h1>
      <Row className="align-items-center">
        <Col md={6}> 
          <div
            className="modal show"
            style={{ display: 'block', position: 'initial' }}
            >
            <Modal.Dialog show={isModalOpen} onHide={handleClose} backdrop={false}>
              <Modal.Header closeButton>
                <Modal.Title className='text-center modal-heading'>More About Best Time To Travel To Yercaud</Modal.Title>
              </Modal.Header>
              <Modal.Body className=''>
                <div className='modal-img'>
                  <div className='row'>
                    <div className='col-sm-4'>
                      <img 
                        src={Yercaud1} 
                        alt="Railway Bridge Source"
                        className='' 
                        style={{width:'100px',height:'150px'}}
                      />
                      <p className='text-center'>Easemytrip Source</p>
                    </div>
                    <div className='col-sm-4'>
                      <img 
                        src={Yercaud2} 
                        alt="Lighthouse Pilgrims Source"
                        className='' 
                        style={{width:'100px',height:'150px'}}
                      />
                      <p className='text-center'>Oyorooms Source</p>
                    </div>
                    <div className='col-sm-4'>
                      <img 
                       src={Yercaud3} 
                       alt="Temple Source"
                       className=''
                       style={{width:'100px',height:'150px'}}
                     />  
                     <p className='text-center'>Hiveminer Source</p>
                    </div>
                  </div>
                </div>
                 
                
                
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Close</Button>
                <Button variant="primary" onClick={handleOpen}>Save changes</Button>
              </Modal.Footer>
            </Modal.Dialog>

                    
            {/* Offcanvas */}
            <Offcanvas show={isOffcanvasOpen} onHide={handleClose} placement="end">
              <Offcanvas.Header closeButton>
                <Offcanvas.Title className='offcanvas-title'>Best Time To Visit In <br />Yercaud</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <h4 className='season-title'>Yercaud in Summer (March-June)</h4>
                <p className='season-text besttimetovisit-bottomtext'>
                  With temperatures that hardly move out of the range between 24 degree Celsius and 28 degree Celsius, Yercaud experiences mild summers during March to June. The best places to visit during this season are the enchanting Emerald Lake, Killiyur Falls, Silk Farm, and Lady?s Seat. Apart from these attractions, one particular festival which allures tourists from every nook of the world is the Yercaud Summer Festival. Held in May, it is an annual festival which keeps everyone on their toes until its arrival. Usually taking place for five days, the enrapturing summer event is as grand as it gets! From sophisticated folk dances to bewitching musical concerts, from captivating cultural competitions to horse riding tournaments, this event is a treasure trove of a smorgasbord of wonderful activities.
                </p>
                <h4 className='season-title'>Yercaud in Winter (November - February)</h4>
                <p className='season-text besttimetovisit-bottomtext'>
                  Yercaud experiences a delightful climate from October to February. The average temperature which stays between a pleasant 10 degree Celsius and 15 degree Celsius is ideal for leisurely nature walks as well as adventure activities. Do not miss out on the Bear?s Cave, Pagoda Point, Shevaroy Temple, and Anna Park, if you plan to visit this beautiful place during winter.
                </p>
                <h4 className='season-title'>Yercaud in Monsoon (July-September)</h4>
                <p className='season-text besttimetovisit-bottomtext'>
                  Yercaud experiences a hot and humid monsoon with temperatures that range between 20 degree Celsius and 25 degree Celsius from June to September. At this time, the coffee plantations look ethereal after being washed by the rain. The Botanical Garden, Raja Rajeshwari Temple, and the Sri Chakra Mahameru Temple are some of the places you should visit during this time.
                </p>
              </Offcanvas.Body>
            </Offcanvas>
          </div>
       </Col>
       <Col md={6}  className="text-right">
             <h4 className='besttimetovisit-primary-sub-heading'>What is the best time to visit:</h4>
             <p className='besttimetovisit-text'> 
                October to June is the best time to visit Yercaud because the weather is dry and cool. However, Yercaud offers breathtaking views and a tranquil ambience throughout the year. During the month of May, a seven-day Summer Festival is conducted which includes flower shows, dog shows, boating races and village fairs. Monsoons (July- September) could be avoided as rains might hamper your sightseeing plans. but the rains make this place extra beautiful and you might not want to miss that either.
             </p>
             <p className='besttimetovisit-text besttimetovisit-bottomtext'>
               Yercaud celebrates seasonal festivals that are in tune with the changing climatic conditions and showcase the nativity and culture of the hill town. If you are planning a weekend getaway or a long vacation, choose the best of the seasons so you can enjoy your trip to the finest. The best period to visit Yercaud is from October to June, when the weather is at its best.
             </p>
          </Col>
       </Row>
    </div>
  )
}

export default Yercaud