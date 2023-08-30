import React, { useState } from 'react';
import '../../components/Styles/Timetovisit/Chennai.css'
import { Row,Col } from 'react-bootstrap'
import {Button,Offcanvas } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Kanyakumari1 from '../../img/kanyakumari1 (1).jpeg'
import Kanyakumari2 from '../../img/kanyakumari1 (2).jpeg'
import Kanyakumari3 from '../../img/kanyakumari1.(3).jpeg'


const Kanyakumari = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return (
    <div className='container'>
      <Row className="align-items-center">
        <Col md={6}  className="text-right">
          <h1 className='besttimetovisit-primary-heading'>05. Kanyakumari</h1>
          <h4 className='besttimetovisit-primary-sub-heading'>What is the best time to visit:</h4>
          <p className='besttimetovisit-text'> 
            The months from October until February are considered the best time to visit Kanyakumari, as the weather remains calm and pleasant. Although this coastal region is a bit humid, this is the best time to try out some adventurous water sports going on sightseeing and outings undertaking beach activities and savouring the spectacular sunset views. With the beginning of winters in November. Kanyakumari also hosts many festivals during this month, for instance the Cape Festival.
          </p>
          <p className='besttimetovisit-text besttimetovisit-bottomtext'>
            Kanyakumari is the southernmost tip of India. As Kanyakumari is close to the seas, the expanse experiences a tropical coastal climate. There are not many variations in the seasons, as there is an overall humidity and seasonal rain during the year.
          </p>
        </Col>
        <Col md={6} className='model-margintop'> 
         <div
            className="modal show"
            style={{ display: 'block', position: 'relative' }}
            >
            <Modal.Dialog>
              <Modal.Header closeButton>
                <Modal.Title className='text-center modal-heading'>More About Best Time To Travel To Kanyakumari</Modal.Title>
              </Modal.Header>
              <Modal.Body className=''>
                <div className='modal-img'>
                  <div className='row'>
                    <div className='col-sm-4'>
                      <img 
                        src={Kanyakumari1} 
                        alt="Landscape Source_img"
                        className='' 
                        style={{width:'100px',height:'150px'}}
                      />
                      <p className='text-center'>Landscape<br /> Source</p>
                    </div>
                    <div className='col-sm-4'>
                      <img 
                        src={Kanyakumari2} 
                        alt="Sea Source_img"
                        className='' 
                        style={{width:'100px',height:'150px'}}
                      />
                      <p className='text-center'>Sea <br />Source</p>
                    </div>
                    <div className='col-sm-4'>
                      <img 
                       src={Kanyakumari3} 
                       alt="Coast Source_img"
                       className=''
                       style={{width:'100px',height:'150px'}}
                     />  
                     <p className='text-center'>Coast<br /> Source</p>
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
                <Offcanvas.Title className='offcanvas-title'>Best Time To Visit In Kanyakumari</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                  <h4 className='season-title'>Kanyakumari in Winters (October to March)</h4>
                  <p className='season-text besttimetovisit-bottomtext'>
                    Winters in Kanyakumari are the best time for sightseeing and travelling around the place. Attractions such as Vavathurai, Chitharal Hill Temple and Thiruvalluvar Statue are popular among the tourists. November is a very favourable month for visiting Kanyakumari as the weather is pleasant with clear skies and less humidity. Temperatures vary from 15 degree celcius to 35 degree celcius. It is also the perfect time for indulging in beach activities like sunbathing, swimming and surfing. December to February are the peak seasons; hence the tourism sector gets maximum revenue during this time.
                  </p>
                  <h4 className='season-title'>Kanyakumari in Summers (April to June)</h4>
                  <p className='season-text besttimetovisit-bottomtext'>
                    Kanyakumari experiences moderate weather during summers, with temperatures ranging from 22 degrees to 35 degrees Celcius. During this period the weather is humid; however, the climatic conditions are apt for visiting the various attractions of the place including Vivekananda Rock, Vattakottai Fort and Gandhi Museum. Apart from this, the various beach activities are open throughout summer, so tourists can indulge in outdoor visits, sea bathing and surfing. Although early summers are an ideal time to visit Kanyakumari, the month of April gets considerably hot which is why this month is not preferred for travel. However, the place gets vacant with less crowd and cheaper accomodation - a perfect time for budget travellers.
                  </p>
                  <h4 className='season-title'>Kanyakumari in Monsoons (July to September)</h4>
                  <p className='season-text besttimetovisit-bottomtext'>
                    Monsoons in Kanyakumari starts in June which helps in tremendously lowering the temperature. However, the level of humidity keeps rising making it difficult to travel around. If you're a pluviophile, then the month of August is best recommended as the atmosphere is pleasant with a slight drizzle that enhances the beauty of this coast. Apart from its humidity, this is a good time to visit during monsoons. The frequent showers put a hold on sightseeing which affects the footfall in Kanyakumari in September, however, the Cape Festival takes place in October, and by this time tourists from around India visit Kanyakumari.
                  </p>
              </Offcanvas.Body>
            </Offcanvas>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Kanyakumari  