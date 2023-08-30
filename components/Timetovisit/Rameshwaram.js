import React, { useState } from 'react';
import { Row,Col } from 'react-bootstrap'
import {Button,Offcanvas } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import '../../components/Styles/Timetovisit/Rameshwaram.css'
import Rameswaram1 from '../../img/rameshwaram1.jpeg'
import Rameswaram2 from '../../img/rameshwaram2.jpeg'
import Rameswaram3 from '../../img/rameshwaram3.jpeg'

const Rameswaram = () => {

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
      <h1 className='besttimetovisit-primary-heading'>02. Rameswaram</h1>
      <Row className="align-items-center">
        <Col md={6}> 
          <div
            className="modal show"
            style={{ display: 'block', position: 'initial' }}
            >
            <Modal.Dialog show={isModalOpen} onHide={handleClose} backdrop={false}>
              <Modal.Header closeButton>
                <Modal.Title className='text-center modal-heading'>More About Best Time To Travel To Rameswaram</Modal.Title>
              </Modal.Header>
              <Modal.Body className=''>
                <div className='modal-img'>
                  <div className='row'>
                    <div className='col-sm-4'>
                      <img 
                        src={Rameswaram1} 
                        alt="Railway Bridge Source_img"
                        className='' 
                        style={{width:'100px',height:'150px'}}
                      />
                      <p className='text-center'>Railway Bridge Source</p>
                    </div>
                    <div className='col-sm-4'>
                      <img 
                        src={Rameswaram2} 
                        alt="Lighthouse Pilgrims Source_img"
                        className='' 
                        style={{width:'100px',height:'150px'}}
                      />
                      <p className='text-center'>Lighthouse Pilgrims Source</p>
                    </div>
                    <div className='col-sm-4'>
                      <img 
                       src={Rameswaram3} 
                       alt="Temple Source_img"
                       className=''
                       style={{width:'100px',height:'150px'}}
                     />  
                     <p className='text-center'>Temple Source</p>
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
                <Offcanvas.Title className='offcanvas-title'>Best Time To Visit In Rameshwaram</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <h4 className='season-title'>Rameshwaram in Winter (December - February)</h4>
                <p className='season-text besttimetovisit-bottomtext'>
                  Winters in Rameshwaram, which last from October all the way to March, is said to be the peak season for visiting Rameshwaram if you are visiting the place as a tourist and not a pilgrim. The temperature during these months drops considerably than the other two seasons, with it ranging from 20 degree Celsius to 30 degree Celsius. The town is also blessed with chilly winds which make the atmosphere even more amicable. This season, therefore, makes for the best time for tourists to take part in a plethora of outdoor activities and enjoy their stay. During December, Rameshwaram also hosts the festival of Arudhra Darshanam which is essentially a festival that celebrates an aspect of Lord Shiva. This is said to be one of the most celebrated festivals amongst all the ones celebrated in Rameshwaram.
                </p>
                <h4 className='season-title'>Rameshwaram in Monsoon (July-October)</h4>
                <p className='season-text besttimetovisit-bottomtext'>
                  The monsoons in Rameshwaram experience temperatures ranging from 28 degree Celsius to 35 degree Celsius. These temperatures are similar to those during the summers, as is the climate except the small relief of humidity received due to short but effective downpours. Though monsoons are humid, August-October offers a good climate to explore Rameswaram as temperatures drop down during this time
                </p>
                <h4 className='season-title'>Rameshwaram in Summer (March-June)</h4>
                <p className='season-text besttimetovisit-bottomtext'>
                  The summers in Rameshwaram last from April to July and the average temperatures during this time range from 27 degree Celsius to 40 degree Celsius. Summers are also called the pilgrim season in Rameshwaram, meaning the town may be exceptionally crowded with chances of various processions and chants throughout the area. The climate in the summers stays hot, as is usual for most Tamil Nadu towns, with the afternoons Being exceptionally sunny. However, the rest of the day is said to clear up, and the heat may not bother you as much.
                </p>
              </Offcanvas.Body>
            </Offcanvas>
          </div>
       </Col>
       <Col md={6}  className="text-right">
             <h4 className='besttimetovisit-primary-sub-heading'>What is the best time to visit:</h4>
             <p className='besttimetovisit-text'> 
                The best time to visit Rameshwaram is from October to April. However, as far as the weather goes, Rameshwaram experiences tropical climate which means the though the seasons greatly vary, the temperatures may not. This makes Rameshwaram a destination which can be visited all year round. Winters (November to February) are cool and temperature comes down to 17 degrees Celcius. This is the most pleasant season for sightseeing and visiting neighbourhoods. The Monsoons (July to September) are humid with average rainfalls, but, the scenic view of the coastal region during these months is enjoyable.
             </p>
             <p className='besttimetovisit-text besttimetovisit-bottomtext'>
                Dotted with temples along the seashore and located on a beautiful island, rumour has it that this is where Lord Rama built the bridge across the ocean to reach Sri Lanka. One of the holiest places in the country, pilgrims flocks to this town to pay their respects and worship Lord Shiva. With a tropical climate throughout the year, this hamlet can pretty much be visited at any time.
             </p>
          </Col>
       </Row>
    </div>
  )
}

export default Rameswaram