import React, { useState } from 'react';
import { Row,Col } from 'react-bootstrap'
import {Button,Offcanvas } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import '../../components/Styles/Timetovisit/Rameshwaram.css'
import Kumbakonam1 from '../../img/kumbakonam1 (1).jpeg'
import Kumbakonam2 from '../../img/kumbakonam1 (2).jpeg'
import Kumbakonam3 from '../../img/kumbakonam1 (3).jpeg'

const Kumbakonam = () => {

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
      <h1 className='besttimetovisit-primary-heading'>06. Kumbakonam</h1>
      <Row className="align-items-center">
        <Col md={6}> 
          <div
            className="modal show"
            style={{ display: 'block', position: 'initial' }}
            >
            <Modal.Dialog show={isModalOpen} onHide={handleClose} backdrop={false}>
              <Modal.Header closeButton>
                <Modal.Title className='text-center modal-heading'>More About Best Time To Travel To Kumbakonam</Modal.Title>
              </Modal.Header>
              <Modal.Body className=''>
                    <div className='modal-img'>
                        <div className='row'>
                            <div className='col-sm-4'>
                            <img 
                                src={Kumbakonam1} 
                                alt="Dawn Source_img"
                                className='' 
                                style={{width:'100px',height:'150px'}}
                            />
                            <p className='text-center'>Dawn <br />Source</p>
                            </div>
                            <div className='col-sm-4'>
                            <img 
                                src={Kumbakonam2} 
                                alt="Steemit Source-img"
                                className='' 
                                style={{width:'100px',height:'150px'}}
                            />
                            <p className='text-center'>Steemit Source</p>
                            </div>
                            <div className='col-sm-4'>
                            <img 
                            src={Kumbakonam3} 
                            alt="Holydham Source_img"
                            className=''
                            style={{width:'100px',height:'150px'}}
                            />  
                            <p className='text-center'>Holydham Source</p>
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
                <Offcanvas.Title className='offcanvas-title'>Best Time To Visit In Kumbakonam</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <h4 className='season-title'>Kumbakonam in Winter (October - February)</h4>
                <p className='season-text besttimetovisit-bottomtext'>
                  The winters in Kumbakonam are pleasantly cold, with light sweaters helping you to survive the cold. The temperature ranges from 15 to 25 degrees Celcius, and the diurnal range of temperature isn't more than a maximum of 10 degrees Celcius. This season is most preferred by tourists to visit Kumbakonam, as exploring the city in this weather becomes comfortable and the temperature is pleasing most of the time during winter months
                </p>
                <h4 className='season-title'>Kumbakonam in Monsoon (June - August)</h4>
                <p className='season-text besttimetovisit-bottomtext'>
                  The monsoon is associated with frequent and untimely shower spells in the region. The temperature drops down considerably after the scorching summers and the place witness a waste stretch of greenery as the rains give life to the flora of the region. The rains can though be problematic at times and can interfere with your exploration plans, but overall this season can also be preferred by tourists to pay a visit to Kumbakonam.
                </p>
                <h4 className='season-title'>Kumbakonam in Summer (March - May)</h4>
                <p className='season-text besttimetovisit-bottomtext'>
                  Summers in the Deccan region of the country is undeniable hot, and the scorching sun might be an unpleasant experience. The summers are usually arid and heated up, and the temperature goes up to 40 degrees Celcius during the day. The season is majorly avoided by tourists to plan a visit to Kumbakonam because of the overall weather conditions.
                </p>
              </Offcanvas.Body>
            </Offcanvas>
          </div>
       </Col>
       <Col md={6}  className="text-right">
             <h4 className='besttimetovisit-primary-sub-heading'>What is the best time to visit:</h4>
             <p className='besttimetovisit-text'> 
                Located in the tropical area and the Deccan region of the country, Kumbakonam has the typical tropical climate, with pleasant winters and hot and dry summers. The monsoons are accompanied with moderate rains and erratic shower spells, thus making the time one of the suitable time to pay a visit. The summers are hot and largely uncomfortable for one to visit the place.
             </p>
             <p className='besttimetovisit-text besttimetovisit-bottomtext'>
               Kumbakonam has a typical tropical climate. Regions around the Cauvery Delta are rather hot, but Kumbakonam has moderate weather throughout the year and summers are said to be far better than in hot coastal cities like Chennai. All said, there are numerous places to visit in Kumbakonam and it were better you choose the most ideal time for a visit. The monsoons are accompanied with moderate rains and erratic shower spells, thus making the time one of the suitable time to pay a visit.
             </p>
          </Col>
       </Row>
    </div>
  )
}

export default Kumbakonam