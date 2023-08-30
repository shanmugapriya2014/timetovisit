import React, { useState } from 'react';
import { Row,Col } from 'react-bootstrap'
import {Button,Offcanvas } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import '../../components/Styles/Timetovisit/Rameshwaram.css'
import Hogenkkal1 from '../../img/hogenakkal1.jpeg'
import Hogenkkal2 from '../../img/hogenakkal2..jpeg'
import Hogenkkal3 from '../../img/hogenakkal3.jpeg'

const Hogenkkal = () => {

    const [isModalOpen] = useState(false);
    const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);
  
    const handleOpen = () => {
       setIsOffcanvasOpen(true);
    };
  
    const handleClose = () => {
      setIsOffcanvasOpen(false);
    };


  return (
    <div className='container'>
      <h1 className='besttimetovisit-primary-heading'>10. Hogenkkal</h1>
      <Row className="align-items-center">
        <Col md={6}> 
          <div
            className="modal show"
            style={{ display: 'block', position: 'initial' }}
            >
            <Modal.Dialog show={isModalOpen} onHide={handleClose} backdrop={false}>
              <Modal.Header closeButton>
                <Modal.Title className='text-center modal-heading'>More About Best Time To Travel To Hogenkkal</Modal.Title>
              </Modal.Header>
              <Modal.Body className=''>
                <div className='modal-img'>
                  <div className='row'>
                    <div className='col-sm-4'>
                      <img 
                        src={Hogenkkal1} 
                        alt="Winter Source_img"
                        className='' 
                        style={{width:'100px',height:'150px'}}
                      />
                      <p className='text-center'>Winter Source</p>
                    </div>
                    <div className='col-sm-4'>
                      <img 
                        src={Hogenkkal2} 
                        alt="Monsoon Source_img"
                        className='' 
                        style={{width:'100px',height:'150px'}}
                      />
                      <p className='text-center'>Monsoon Source</p>
                    </div>
                    <div className='col-sm-4'>
                      <img 
                       src={Hogenkkal3} 
                       alt="Dry Source_img"
                       className=''
                       style={{width:'100px',height:'150px'}}
                     />  
                     <p className='text-center'>Dry <br /> Source</p>
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
                <Offcanvas.Title className='offcanvas-title'>Best Time To Visit In <br /> Hogenkkal</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <h4 className='season-title'>Hogenkkal in Winter (November - February)</h4>
                <p className='season-text besttimetovisit-bottomtext'>
                  Watch the glory of nature take over Hogenakkal, as the south-west monsoon showers the region with about 150 mm of rainfall between these months. Hogenakkal is a sight to behold in the rain, as the Kaveri comes alive and usually floods her banks. While adventure enthusiasts and adrenaline junkies throng Hogenakkal in the monsoon, it is not recommended for tourists as the currents are too strong to swim in. Boating is not allowed either, and there is no standard means of transportation to reach the waterfalls. It is best to avoid the river, as the water flow may be too heavy. Further downhill, you can go rafting if you prefer, although discretion is advised. The waterfalls are a sight to behold, as they live up to their name of the 'Smoking Rocks' - the sultry mist as the water strikes the rocks covers the base in a myriad of colours. Rainbows adorn the falls and the scene is postcard-perfect.
                </p>
                <h4 className='season-title'>Hogenkkal in Monsoon (July-September)</h4>
                <p className='season-text besttimetovisit-bottomtext'>
                  Hogenakkal Waterfall is a popular destination attraction among nature lovers, adventure seekers, trekkers and shutterbugs. If you are planning a trip to this waterfall, here is some information about Hogenakkal Falls timings, location, activities, parking fee and more.
                </p>
                <h4 className='season-title'>Hogenkkal in Summer (March-June)</h4>
                <p className='season-text besttimetovisit-bottomtext'>
                  The Indian Peninsula lies in the tropics, and is known for its sweltering summer heat. Temperatures soar to a maximum of 35°C in April, which is the hottest month of the year here. The water flow is minimal, and there are few waterfalls to reckon during these summer months. Most small waterfalls dry up. The rock facades are magnificent, though. The jagged rocks and steep gorges make for picture-perfect views, and have been featured in many films as well.
                </p>
              </Offcanvas.Body>
            </Offcanvas>
          </div>
       </Col>
       <Col md={6}  className="text-right">
             <h4 className='besttimetovisit-primary-sub-heading'>What is the best time to visit:</h4>
             <p className='besttimetovisit-text'> 
               he best time to visit Hogenakkal is during the winter from October - February to relax and unwind near the waterfalls. Winters in Hogenekkal is pleasant with moderate weather throughout the day. Whereas the summers are warm and sunny with temperatures ranging from 23 34 degree celcius. Despite summers being an off season, a dip in the hogenekkal lake is rejuvenating for all. Monsoon on the other hand has a pleasant weather with temperatures ranging from 13 to 20 degree celcius, making it an ideal time to enjoy its spectacular beauty.
             </p>
             <p className='besttimetovisit-text besttimetovisit-bottomtext'>
               Hogenakkal Falls, located on the border of Tamil Nadu and Karnataka, is one of the most scenic places to visit in the region. The waterfall is known as Hogenakkal, or "Smoky Rocks" because of the unique arrangement of the gigantic carbonated rocks that surround it. The sight of River Kaveri splitting into multiple small streams and cascading from different heights ranging from 15 feet to 66 feet will leave you mesmerised! Hogenakkal Waterfall is similar to the popular.
             </p>
          </Col>
       </Row>
    </div>
  )
}

export default Hogenkkal
