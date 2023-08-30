import React, { useState } from 'react';
import { Row,Col } from 'react-bootstrap'
import {Button,Offcanvas } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import '../../components/Styles/Timetovisit/Rameshwaram.css'
import Ooty1 from '../../img/ooty1.jpeg'
import Ooty2 from '../../img/ooty2.jpeg'
import Ooty3 from '../../img/ooty3.jpeg'

const Ooty = () => {

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
      <h1 className='besttimetovisit-primary-heading'>04. Ooty</h1>
      <Row className="align-items-center">
        <Col md={6}> 
          <div
            className="modal show"
            style={{ display: 'block', position: 'initial' }}
            >
            <Modal.Dialog show={isModalOpen} onHide={handleClose} backdrop={false}>
              <Modal.Header closeButton>
                <Modal.Title className='text-center modal-heading'>More About Best Time To Travel To Ooty</Modal.Title>
              </Modal.Header>
              <Modal.Body className=''>
                <div className='modal-img'>
                  <div className='row'>
                    <div className='col-sm-4'>
                      <img 
                        src={Ooty1} 
                        alt="Mountain Railway Source_img"
                        className='' 
                        style={{width:'100px',height:'150px'}}
                      />
                      <p className='text-center'>Mountain Railway Source</p>
                    </div>
                    <div className='col-sm-4'>
                      <img 
                        src={Ooty2} 
                        alt="Ooty Lake Source_img"
                        className='' 
                        style={{width:'100px',height:'150px'}}
                      />
                      <p className='text-center'>Ooty <br />Lake <br /> Source</p>
                    </div>
                    <div className='col-sm-4'>
                      <img 
                       src={Ooty3} 
                       alt="Trekking Ooty Source-img"
                       className=''
                       style={{width:'100px',height:'150px'}}
                     />  
                     <p className='text-center'>Trekking <br />Ooty <br /> Source</p>
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
                <Offcanvas.Title className='offcanvas-title'>Best Time To Visit In <br />Ooty</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <h4 className='season-title'>Ooty in Summer (March-June)</h4>
                <p className='season-text besttimetovisit-bottomtext'>
                  Ooty experiences an average temperature that ranges between 23 degree Celsius and 31 degree Celsius, which is perfect for you to explore the sheer beauty of this place in full swing.
                </p>
                <h4 className='season-title'>Ooty in Winter (October-March)</h4>
                <p className='season-text besttimetovisit-bottomtext'>
                  With temperatures that stay below 15 degree Celsius, winters in Ooty are perfect to have a gala time. Each year, during January or February, Department of Tourism in Tamil Nadu hosts The Tea and Tourism Festival for three days. A vast range of tea leaves are displayed, and rows of tea stalls are put up for tasting and buying a wide variety of tea. In addition to this, these three days are packed with cultural shows and performances, which reverberate with the heritage of the Nilgiris. 
                </p>
                <h4 className='season-title'>Ooty in Monsoon (July-September)</h4>
                <p className='season-text besttimetovisit-bottomtext'>
                  People who love rainfall and green grass beds laid over mountains can pack their bags and head straight to Ooty during the monsoon months, which lasts between June and September. Even though you are unlikely to experience the bright, warm sunshine, you will have a great time nevertheless.
                </p>
              </Offcanvas.Body>
            </Offcanvas>
          </div>
       </Col>
       <Col md={6}  className="text-right">
             <h4 className='besttimetovisit-primary-sub-heading'>What is the best time to visit:</h4>
             <p className='besttimetovisit-text'> 
               The best time to visit Ooty is throughout the year as the weather is pleasant and great for sightseeing. The temperature usually ranges from 5-15 degrees throughout the year with colder nights. However, the peak season is from October to June when the weather is pleasant and you can get involved in outdoor activities. Ooty can be visited during monsoons (if you don't mind the rain) when the freshly washed surroundings give Ooty an ethereal charm. The annual Tea and Tourism Festival attracts crowds in huge numbers to visit the place and have a great time in this wonderful place.
             </p>
             <p className='besttimetovisit-text besttimetovisit-bottomtext'>
               The poised and elegant Queen of Hill Stations' welcomes you to the kingdom in the clouds. Individuals travel far and wide to partake in the awe-inspiring wonders of one of India's most beloved hill stations - Ootacamund or Ooty. Here, history and culture form a sweet medley, while nature sings to its own symphony. Colonial churches, Hindu temples, tribal museums and libraries brand the plains with stories.
             </p>
          </Col>
       </Row>
    </div>
  )
}

export default Ooty